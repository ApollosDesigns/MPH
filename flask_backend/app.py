from flask import Flask, send_from_directory, request, jsonify
import serial
import os

app = Flask(__name__, static_folder='../frontend/dist')

# Serial communication setup
arduino = serial.Serial(port='/dev/ttyUSB0', baudrate=9600, timeout=1)

@app.route('/lock', methods=['POST'])
def lock():
    command = request.json.get('command')
    if command == 'lock':
        arduino.write(b'L')
        return jsonify({"status": "locked"})
    elif command == 'unlock':
        arduino.write(b'U')
        return jsonify({"status": "unlocked"})
    return jsonify({"status": "invalid command"})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
