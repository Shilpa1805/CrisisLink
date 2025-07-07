from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import os
from dotenv import load_dotenv

load_dotenv()

# Fetch from your .env file
DATABASE_URL = os.getenv("DATABASE_URL")

# Create engine and session
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)

try:
    # Try to connect
    with engine.connect() as connection:
        result = connection.execute("SELECT version();")
        print("✅ Connected to PostgreSQL")
        for row in result:
            print("Database version:", row[0])
except Exception as e:
    print("❌ Error connecting to the database:", e)
