from fastapi import FastAPI, HTTPException, APIRouter
from pydantic import BaseModel
from passlib.context import CryptContext
from routes import router
from database import db
from pymongo import MongoClient
from utils import pwd_context
from fastapi.middleware.cors import CORSMiddleware


# Set up FastAPI and MongoDB connection
app = FastAPI()

app.include_router(router)

# For hashing passwords
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (you can restrict to specific domains)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the User model (to handle incoming user data)
class User(BaseModel):
    full_name: str
    username: str
    phone_number: str
    email: str
    password: str

# Login Route
@app.post("/login")
async def login_user(email: str, password: str):
    user = users_collection.find_one({"email": user.email})
    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    if not pwd_context.verify(password, user["password"]):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    return {"message": "Login successful"}

# Basic Root Endpoint to test connection
@app.get("/")
async def read_root():
    return {"message": "Welcome to FastAPI with MongoDB"}