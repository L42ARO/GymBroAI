from config.setup import app, socketio
from flask import send_from_directory
from flask_socketio import SocketIO, emit, join_room
import uuid
import requests
import os

@app.route('/')
def hello():
    return 'Hello, World!'

@socketio.on('join-room')
def handle_join_room():
    #Generate random id for room
    room = str(uuid.uuid4())
    join_room(room)
    emit('joined-room', {'room': room})

@socketio.on('update-duration')
def update_duration(data):
    # Data should be formated: {'room': room, 'duration': duration}
    room = data['room']
    duration = data['duration']
    
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

@socketio.on('terra-auth')
def handle_terra_auth(data):
    #Data should be formated: {'room': room}
    room = data['room']
    url = "https://api.tryterra.co/v2/auth/generateWidgetSession"

    payload = {
        "reference_id": "your_users_id",
        "providers": "GARMIN,WITHINGS,FITBIT,GOOGLE,OURA,WAHOO,PELOTON,ZWIFT,TRAININGPEAKS,FREESTYLELIBRE,DEXCOM,COROS,HUAWEI,OMRON,RENPHO,POLAR,SUUNTO,EIGHT,APPLE,CONCEPT2,WHOOP,IFIT,TEMPO,CRONOMETER,FATSECRET,NUTRACHECK,UNDERARMOUR",
        "language": "en",
        "auth_success_redirect_url":"https://gymbroai.netlify.app/auth/terra"
    }
    headers = {
        "accept": "application/json",
        "dev-id": "harvard-testing-cm5nhKi7If",
        "content-type": "application/json",
        "x-api-key": "JWlqJTpxMiIreDGyP5W5KE25rR-SGULH"
    }

    response = requests.post(url, json=payload, headers=headers)
    response.raise_for_status()

    url = response.json()["url"]
    print(url)
    socketio.emit('terra-auth-url', {'url': url}, room=room)


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', allow_unsafe_werkzeug=True, port=os.getenv("PORT", default=5000))
