// account/name/weight/height/units/age
import './YouContainer.css';
import { IonPage, IonContent, IonItem, IonLabel } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import { alarmOutline, barChartOutline, barbellOutline, bodyOutline, calendarOutline, diamondOutline, personOutline, planetOutline, rocketOutline, scaleOutline, starOutline, timerOutline } from 'ionicons/icons';


interface YouContainerProps {
  name: string;
}

const YouContainer: React.FC<YouContainerProps> = ({name}) => {
  return (
        <div>
          <IonItem>
            <IonIcon icon={personOutline}></IonIcon> 
            <IonLabel>Account</IonLabel>
            {/* <IonLabel>{routineLabel}</IonLabel> */}
          </IonItem>
          <IonItem>
            <IonIcon icon={diamondOutline}> </IonIcon>
            <IonLabel>Name</IonLabel>
            {/* <IonLabel>{durationLabel}</IonLabel> */}
          </IonItem>
          <IonItem>
            <IonIcon icon={scaleOutline}> </IonIcon>
            <IonLabel>Weight</IonLabel>
            {/* <IonLabel>{objectiveLabel}</IonLabel> */}
          </IonItem>
          <IonItem>
            <IonIcon icon={bodyOutline}> </IonIcon>
            <IonLabel>Height</IonLabel>
            {/* <IonLabel>{equipmentLabel}</IonLabel> */}
          </IonItem>
          <IonItem>
            <IonIcon icon={rocketOutline}> </IonIcon>
            <IonLabel>Age</IonLabel>
            {/* <IonLabel>{weeklyGoalLabel}</IonLabel> */}
          </IonItem>
          <IonItem>
            <IonIcon icon={planetOutline}> </IonIcon>
            <IonLabel>Gendre</IonLabel>
            {/* <IonLabel>{experienceLabel}</IonLabel> */}
          </IonItem>
          <IonItem>
            <IonIcon icon={alarmOutline}> </IonIcon>
            <IonLabel>Units</IonLabel>
            {/* <IonLabel>{restTimerLabel}</IonLabel> */}
          </IonItem>
        </div>
  );
};

export default YouContainer;
