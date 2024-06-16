# File: run.py
# Location: /mnt/c/Users/User/Documents/Muilt_Purpose_Hinge/flask_backend

import os
from app import create_app

app = create_app()

if __name__ == '__main__':
    os.environ['FLASK_APP'] = 'run.py'
    print("Starting Flask application...")
    app.run(debug=True)
