import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonIcon, IonInput, IonRow } from '@ionic/react';
import './ChatContainer.css';
import { useEffect, useRef, useState } from 'react';
import {useSocket} from '../contexts/socketContext';
import { send } from 'ionicons/icons';
import '../theme/tailwind.css'

interface ChatContainerProps {
  name: string | undefined;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ name }) => {
  var hello :string = name ?? "Hello";
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLIonInputElement>(null);
  const [query, setQuery] = useState<string>("");
  var [ROOM, setROOM] = useState<string>("");
    const { socket, connect, disconnect } = useSocket();
  interface Message{
    sender: string;
    content: string;
  }
  var [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    connect();
    
    socket?.on('text-response', (data) => {
      // Data format: {response: string}
      var response = data.response;
      //Add to messages as Server Entry
      setMessages(prevMessages => [...prevMessages, {sender: "Server", content: response}]);
    });
    socket?.on('joined-room', (data) => {
      //Data format: {room:string}
      var room = data.room;
      setROOM(room);
    });
    return () => {
      disconnect();
    };
  }, [socket, connect, disconnect]);

  const SendMessage = () =>{
    // Get the query from the input
    //Add to messages as User Entry
    // Hard copy messages
    //If there is a message in the input
    if (query == "") return;
    setMessages(prevMessages=>[...prevMessages, {sender: "User", content: query}]);
    console.log("Sending message");
    socket?.emit('user-request', {room: ROOM, query: query});
    setQuery("");
  }
  //On messages changed console.log messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);


  return (
    <div className="chat-container">
        <div className='chat-history'>
          {messages.map((message, index) => {
            if(message.sender == "Server"){
              return <TrainerEntry key={index} content={message.content} />
            }
            else{
              return <UserEntry key={index} username={message.sender} content={message.content} />
            }
          })}
          <div ref={messagesEndRef} className='p-3'/>
          {/* <TrainerEntry content="Hello there, what type of training do you want" />
          <UserEntry username="User" content="I want to train my legs" /> */}
        </div>
        <div className='chat-input'>
          <IonInput
            placeholder="Enter your message"
            className="ion-text-start"
            value={query}
            onIonInput={(e: any) =>{ 
              setQuery(e.target.value)
            }}
            onKeyDown={(e: any) => {
              if (e.key === 'Enter') {
                SendMessage();
              }
            }}
          ></IonInput>
          <IonButton onClick={e=>SendMessage()} disabled={query==""}>
            <IonIcon aria-hidden="true" icon={send} />
          </IonButton>
        </div>
    </div>
  );
};

//Chat entry component for trainer
interface TrainerEntryProps {
  content: string;
}

const TrainerEntry: React.FC<TrainerEntryProps> = ({ content }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Trainer</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        {content}
      </IonCardContent>
    </IonCard>
  );
};

interface UserEntryProps {
  username: string;
  content: string;
}
//Create a chat entry component for user
const UserEntry: React.FC<UserEntryProps> = ({ username, content }) => {
  return (
    <IonCard className='ion-text-end'>
      <IonCardHeader>
        <IonCardTitle>{username}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        {content}
      </IonCardContent>
    </IonCard>
  );
};


export default ChatContainer;
