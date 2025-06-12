from pymongo import MongoClient


MONGO_URI = "mongodb://localhost:27017" # Replace with your MongoDB URI (local or Atlas)

client = MongoClient(MONGO_URI)
db = client["crisislink_db"]  # Change the DB name as needed
users_collection = db["users"] 
