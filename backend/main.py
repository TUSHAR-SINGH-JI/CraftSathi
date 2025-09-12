from fastapi import FastAPI,Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from pymongo import MongoClient
import os
from dotenv import load_dotenv
import firebase_admin
from firebase_admin import credentials,auth
from pydantic import BaseModel

load_dotenv()
app=FastAPI()
templates = Jinja2Templates(directory="templates")

# Create a dictionary with all the required Firebase credentials.
firebase_credentials = {
  "type": os.getenv("type"),
  "project_id": os.getenv("project_id"),
  "private_key_id": os.getenv("private_key_id"),
  "private_key": os.getenv("private_key"),
  "client_email": os.getenv("client_email"),
  "client_id": os.getenv("client_id"),
  "auth_uri": os.getenv("auth_uri"),
  "token_uri": os.getenv("token_uri"),
  "auth_provider_x509_cert_url": os.getenv("auth_provider_x509_cert_url"),
  "client_x509_cert_url": os.getenv("client_x509_cert_url")
}

# Use the credentials dictionary to initialize the Firebase Admin SDK.
try:
    cred = credentials.Certificate(firebase_credentials)
    firebase_admin.initialize_app(cred)
    print("✅ Firebase Admin SDK initialized successfully from environment variables!")
except ValueError:
    print("🔥 Firebase Admin SDK already initialized.")


uri=os.getenv("MONGO_URI")
conn=MongoClient(uri)
db=conn["CraftSathi"]
coll=db["users"]

class UserSchema(BaseModel):
    email: str
    password: str

class UserResponse(BaseModel):
    uid: str
    email: str

@app.get("/", response_class=HTMLResponse)
async def check(request:Request):
    firebase_client_config = {
        "request": request,
        "firebase_api_key": os.getenv("FIREBASE_API_KEY"),
        "firebase_auth_domain": os.getenv("FIREBASE_AUTH_DOMAIN"),
        "firebase_project_id": os.getenv("FIREBASE_PROJECT_ID"),
        "firebase_storage_bucket": os.getenv("FIREBASE_STORAGE_BUCKET"),
        "firebase_messaging_sender_id": os.getenv("FIREBASE_MESSAGING_SENDER_ID"),
        "firebase_app_id": os.getenv("FIREBASE_APP_ID")
    }
    return templates.TemplateResponse("index.html", firebase_client_config)

@app.post("/register", response_model=UserResponse, status_code=201)
async def create_user(user: UserSchema):
    """
    Endpoint to register a new user in Firebase Authentication.
    """
    try:
        user_record = auth.create_user(
            email=user.email,
            password=user.password
        )
        # Optional: Save user to your MongoDB collection
        # coll.insert_one({"uid": user_record.uid, "email": user_record.email, "createdAt": user_record.user_metadata.creation_timestamp})
        return {"uid": user_record.uid, "email": user_record.email}
    except auth.EmailAlreadyExistsError:
        raise HTTPException(status_code=400, detail="Email already exists")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))