from config.setup import app, socketio
from flask import send_from_directory
from flask_socketio import SocketIO, emit, join_room
import uuid

@app.route('/')
def hello():
    return 'Hello, World!'

@socketio.on('join-room')
def handle_join_room():
    #Generate random id for room
    room = str(uuid.uuid4())
    join_room(room)
    emit('joined-room', {'room': room})
    
@socketio.on('user-request')
def handle_user_request(data):
    # Data should be formated: {'room': room, 'query': query}
    room = data['room']
    query = data['query']
    
    # TODO: Handle query
    res = 'This is a response from the server!'
    res_type = 'text'
    
    #response can either be text or list
    if res_type == 'text':
        # Emit response to room
        emit('text-response', {'response': res}, room=room)
    elif res_type == 'list':
        # Emit response to room
        emit('list-response', {'response': res}, room=room)
    


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)