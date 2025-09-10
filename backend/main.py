from fastapi import FastAPI
from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()
uri=os.getenv("MONGO_URI")
conn=MongoClient(uri)
db=conn["CraftSathi"]
coll=db["users"]

new_customer = {
        "name": "Ada Lovelace",
        "email": "ada.lovelace@example.com",
        "signup_date": "2025-09-10",
        "active": True
    }
rel=coll.insert_one(new_customer)
print(rel)