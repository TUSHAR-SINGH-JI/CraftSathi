from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
form pymongo import MongoClient

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:5174"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World scmposcocopmd"}

@app.get("/register")
async def login():
    print("Logged in..")