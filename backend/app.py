from config.setup import app, socketio
from flask import send_from_directory
from flask_socketio import SocketIO, emit, join_room

@app.route('/')
def hello():
    return 'Hello, World!'

@socketio.on('message')
def handle_message(data):
    print(f"Received message: {data}")
    socketio.emit('response', f"Server received: {data}")


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)