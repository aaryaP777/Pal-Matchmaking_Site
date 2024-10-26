from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from database import db
from utils import pwd_context

router = APIRouter()

class User(BaseModel):
    email: str
    password: str

@router.post("/signin")
async def register_user(user: User):
    existing_user = users_collection.find_one({"username": user.username}) or users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    # Hash the password before saving
    hashed_password = pwd_context.hash(user.password)
    user_data = user.dict()
    user_data["password"] = hashed_password
    
    users_collection.insert_one(user_data)

    # await db["users_table"].insert_one(user_data)
    return {"message": "User registered successfully"}
