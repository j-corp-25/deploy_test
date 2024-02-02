import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'default-secret-key')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # Default to using SQLite for development
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///dev.db')

class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.getenv('POSTGRES_URL')
    if SQLALCHEMY_DATABASE_URI:
        SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DATABASE_URI.replace('postgres://', 'postgresql://')
    else:
        # Fall back to the development URI or some default
        SQLALCHEMY_DATABASE_URI = 'sqlite:///dev.db'  # or any other fallback
