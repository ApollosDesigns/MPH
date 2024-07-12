# File: run.py
# Location: /mnt/c/Users/User/Documents/Muilt_Purpose_Hinge/flask_backend

from app import create_app
from waitress import serve

app = create_app()

if __name__ == '__main__':
    print("Starting Flask application with Waitress...")
    serve(app, host='0.0.0.0', port=8000)
