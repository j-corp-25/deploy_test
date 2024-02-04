import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'default-secret-key')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///dev.db')
    FLASK_APP = os.getenv('FLASK_APP')

class ProductionConfig(Config):
    # In production, use the POSTGRES_URL environment variable provided by Vercel
    SQLALCHEMY_DATABASE_URI = os.getenv('POSTGRES_URL').replace('postgres://', 'postgresql://')

# Determine which config to load
if os.getenv('VERCEL_ENV') == 'production':
    current_config = ProductionConfig()
else:
    current_config = Config()
