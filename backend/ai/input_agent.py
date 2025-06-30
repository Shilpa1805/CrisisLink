import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load your Gemini API key from .env
load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# ✅ Use a currently supported model
model = genai.GenerativeModel(model_name="gemini-1.5-flash")

def extract_input_info(message: str) -> str:
    prompt = f"""
You are an AI that extracts structured data from messages during a disaster relief operation.

Given this message: "{message}"

Return ONLY a JSON object with the following fields:
- user_type: "donor", "requester", or "volunteer"
- location: city or place mentioned
- category: type of item/help (like food, water, medicine, clothes, shelter)
- description: one-line summary of what they want or offer

Respond with only a valid JSON object.
"""
    response = model.generate_content(prompt)
    return response.text.strip()


# 🧪 Test
if __name__ == "__main__":
    test_msg = "Hello, I want to volunteer for distributing relief kits in Chennai."
    print("Input:", test_msg)
    result = extract_input_info(test_msg)
    print("Structured Output:\n", result)
