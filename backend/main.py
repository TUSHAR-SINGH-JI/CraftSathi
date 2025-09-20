import os
import requests
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from pymongo import MongoClient
import firebase_admin
from firebase_admin import credentials, auth

# --- Configuration & Initialization ---
load_dotenv()
app = FastAPI()
conn=MongoClient(os.getenv("MONGO_URI"))
db=conn.get_database("CraftSathi") 
user_col = db.get_collection('users')


# --- Middleware ---
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Firebase Admin SDK Initialization (Manual Method from .env) ---
try:
    if not firebase_admin._apps:
        # Manually build the credentials dictionary from environment variables
        firebase_credentials = {
            "type": os.getenv("type"),
            "project_id": os.getenv("project_id"),
            "private_key_id": os.getenv("private_key_id"),
            # This line is crucial: it correctly formats the private key
            "private_key": os.getenv("private_key", "").replace('\\n', '\n'),
            "client_email": os.getenv("client_email"),
            "client_id": os.getenv("client_id"),
            "auth_uri": os.getenv("auth_uri"),
            "token_uri": os.getenv("token_uri"),
            "auth_provider_x509_cert_url": os.getenv("auth_provider_x509_cert_url"),
            "client_x509_cert_url": os.getenv("client_x509_cert_url"),
        }
        
        # Check if essential credentials are provided to give a clear error
        if not all([firebase_credentials["project_id"], firebase_credentials["private_key"], firebase_credentials["client_email"]]):
            raise ValueError("Essential Firebase credential environment variables (project_id, private_key, client_email) are missing.")

        cred = credentials.Certificate(firebase_credentials)
        firebase_admin.initialize_app(cred)
        print("✅ Firebase Admin SDK initialized successfully from .env variables!")
except Exception as e:
    print(f"🔥 Error initializing Firebase Admin SDK: {e}")


# --- Pydantic Models for Data Validation ---
class UserRegisterSchema(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLoginSchema(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    token: str


# --- API Endpoints ---
@app.get("/")
def read_root():
    return {"message": "Welcome to the CraftSathi API"}

@app.post("/auth/register", response_model=TokenResponse, status_code=201)
async def register_user(user_data: UserRegisterSchema):
    try:
        user_record = auth.create_user(
            email=user_data.email,
            password=user_data.password,
            display_name=user_data.name
        )
        custom_token = auth.create_custom_token(user_record.uid)
        creds={"u_Id":user_record.uid,"u_name":user_data.name,"u_mail":user_data.email,"u_pwd":user_data.password}
        user_col.insert_one(creds)
        print("User registered")
        return {"token": custom_token}

    except auth.EmailAlreadyExistsError:
        raise HTTPException(status_code=400, detail="An account with this email already exists.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")

@app.get("/auth")
def sox():
    print("Authentication pages is live")
@app.post("/auth/login", response_model=TokenResponse)
async def login_user(user_data: UserLoginSchema):
    firebase_web_api_key = os.getenv("FIREBASE_API_KEY")
    if not firebase_web_api_key:
        raise HTTPException(status_code=500, detail="Firebase Web API Key is not configured.")
        
    rest_api_url = f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={firebase_web_api_key}"
    payload = {
        "email": user_data.email,
        "password": user_data.password,
        "returnSecureToken": True
    }
    
    try:
        response = requests.post(rest_api_url, json=payload)
        response.raise_for_status()
        user_uid = response.json().get("localId")
        if not user_uid:
            raise HTTPException(status_code=500, detail="Failed to retrieve user ID.")
        rel=user_col.find_one({"u_Id": user_uid})
        print(rel['u_name'])
        custom_token = auth.create_custom_token(user_uid)
        return {"token": custom_token}
    except requests.exceptions.HTTPError:
        raise HTTPException(status_code=401, detail="Invalid email or password.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected server error: {str(e)}")

