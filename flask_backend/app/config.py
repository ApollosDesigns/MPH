# File: config.py
# Location: /mnt/c/Users/User/Documents/Muilt_Purpose_Hinge/flask_backend/app

import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI') or 'sqlite:///instance/app.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
