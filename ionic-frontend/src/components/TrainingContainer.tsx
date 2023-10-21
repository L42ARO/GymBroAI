import './TrainingContainer.css';
import { IonPage, IonContent, IonItem, IonLabel } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import { alarmOutline, barChartOutline, barbellOutline, calendarOutline, planetOutline, rocketOutline, starOutline, timerOutline } from 'ionicons/icons';

interface TrainingContainerProps {
  name: string;
  routineLabel: string;
  durationLabel: string;
  objectiveLabel: string;
  equipmentLabel: string;
  weeklyGoalLabel: string;
  experienceLabel: string;
  restTimerLabel: string;
}

const TrainingContainer: React.FC<TrainingContainerProps> = ({
  routineLabel,
  durationLabel,
  objectiveLabel,
  equipmentLabel,
  weeklyGoalLabel,
  experienceLabel,
  restTimerLabel,
}) => {
  return (
    
        <div>
          <IonItem>
            <IonIcon icon={calendarOutline}></IonIcon> 
            <IonLabel>Routine</IonLabel>
            <IonLabel>{routineLabel}</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={timerOutline}> </IonIcon>
            <IonLabel>Duration</IonLabel>
            <IonLabel>{durationLabel}</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={starOutline}> </IonIcon>
            <IonLabel>Objective</IonLabel>
            <IonLabel>{objectiveLabel}</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={barbellOutline}> </IonIcon>
            <IonLabel>Equipment</IonLabel>
            <IonLabel>{equipmentLabel}</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={rocketOutline}> </IonIcon>
            <IonLabel>Weekly Goal</IonLabel>
            <IonLabel>{weeklyGoalLabel}</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={planetOutline}> </IonIcon>
            <IonLabel>Experience</IonLabel>
            <IonLabel>{experienceLabel}</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={alarmOutline}> </IonIcon>
            <IonLabel>Rest Timer</IonLabel>
            <IonLabel>{restTimerLabel}</IonLabel>
          </IonItem>
        </div>
  );
};

export default TrainingContainer;
