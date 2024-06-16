from flask import Flask, request, jsonify
import serial
import time

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
