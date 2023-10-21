from config.setup import app, socketio
from flask import send_from_directory
from flask_socketio import SocketIO, emit, join_room

@app.route('/')
def hello():
    return 'Hello, World!'

@socketio.on('user-request')
def handle_user_request(data):
    # Data should be formated: {'room': room, 'username': username, 'query': query}
    room = data['room']
    username = data['username']
    query = data['query']
    
    # TODO: Handle query
    res = 'This is a response from the server!'
    res_type = 'text'
    
    #Based on the response type either emit: 'text-response' or 'image-response' or 'checkbox-response'
    if res_type == 'text':
        emit('text-response', {'room': room, 'username': username, 'content': res})
    elif res_type == 'image':
        emit('image-response', {'room': room, 'username': username, 'content': res})
    elif res_type == 'checkbox':
        emit('checkbox-response', {'room': room, 'username': username, 'content': res})
    


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)