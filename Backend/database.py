from pymongo import MongoClient
# from motor.motor_asyncio import AsyncIOMotorClient

client = MongoClient("mongodb://localhost:27017/")
db = client["PAL_DB"]
users_collection = db["users_table"]
