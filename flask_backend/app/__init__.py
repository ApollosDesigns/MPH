# File: __init__.py
# Location: /mnt/c/Users/User/Documents/Muilt_Purpose_Hinge/flask_backend/app

import os
from dotenv import load_dotenv
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

print("Loading environment variables...")
load_dotenv()

print("Initializing extensions...")
db = SQLAlchemy()
migrate = Migrate()
login = LoginManager()
login.login_view = 'main.login'

def create_app():
    print("Creating Flask app...")
    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    print("Initializing app with extensions...")
    db.init_app(app)
    migrate.init_app(app, db)
    login.init_app(app)

    from app.routes import main_bp
    app.register_blueprint(main_bp)

    print("Flask app created successfully.")

    # Add a breakpoint here
    #import pdb; pdb.set_trace()

    return app
