import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonIcon, IonInput, IonRow } from '@ionic/react';
import './ChatContainer.css';


interface ChatContainerProps {
  name: string | undefined;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ name }) => {
  var hello:string = name ?? "Hello";
  
  return (
    <div className="chat-container">
        <div className='chat-history'>
          <TrainerEntry content="Hello there, what type of training do you want" />
          <UserEntry username="User" content="I want to train my legs" />
        </div>
        <div className='chat-input'>
          <IonInput
            placeholder="Enter your message"
            className="ion-text-start"
          ></IonInput>
          <IonButton fill="clear" slot="end">
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
