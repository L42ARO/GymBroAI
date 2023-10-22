import './TrainingContainer.css';
import { IonPage, IonContent, IonItem, IonLabel } from '@ionic/react';
import { IonIcon, IonButton, IonModal } from '@ionic/react';
import { alarmOutline, barChartOutline, barbellOutline, calendarOutline, planetOutline, rocketOutline, starOutline, timerOutline } from 'ionicons/icons';
import { useState } from 'react';
import DurationSelector from './DurationSelectorContainer';

interface TrainingContainerProps {
  name: string;
  routineLabel: string;
  durationLabel: string;
  objectiveLabel: string;
  equipmentLabel: string;
  weeklyGoalLabel: string;
  experienceLabel: string;
}

const TrainingContainer: React.FC<TrainingContainerProps> = ({
  routineLabel,
  objectiveLabel,
  equipmentLabel,
  weeklyGoalLabel,
  experienceLabel,
}) => {
  const [showDurationModal, setShowDurationModal] = useState(false);
  const [durationLabel, setDurationLabel] = useState('0 h 0 m 0 s'); // Initialize as needed

  

  const handleDurationConfirmed = (duration: { hours: number, minutes: number, seconds: number }) => {
    const newDuration = duration.hours + " h " + duration.minutes + " m " + duration.seconds + " s";
    setDurationLabel(newDuration);
    setShowDurationModal(false);
  };
  

  return (
        <div>
          <IonItem>
            <IonIcon icon={calendarOutline}></IonIcon> 
            <IonLabel>Routine</IonLabel>
            <IonLabel>{routineLabel}</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={timerOutline}></IonIcon>
            <IonLabel>Duration</IonLabel>
            <IonButton onClick={() => setShowDurationModal(true)} className="duration-button">
              {durationLabel}
            </IonButton>
            <IonModal isOpen={showDurationModal} onDidDismiss={() => setShowDurationModal(false)}>
              <DurationSelector onConfirm={handleDurationConfirmed} />
              <IonButton onClick={() => setShowDurationModal(false)}>Cancel</IonButton>
            </IonModal>
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
        </div>
  );
};

export default TrainingContainer;
