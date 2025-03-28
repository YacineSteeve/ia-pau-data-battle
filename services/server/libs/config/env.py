import os
from dotenv import load_dotenv

load_dotenv()

class EnvConfig:
    DATABASE_URL: str = os.environ.get("DATABASE_URL")
    OLLAMA_API_URL: str = os.environ.get("OLLAMA_API_URL")
    SECRET_KEY: str = os.environ.get("SECRET_KEY")
