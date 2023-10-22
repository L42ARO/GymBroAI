import './TrainingContainer.css';
import { IonPage, IonContent, IonItem, IonLabel } from '@ionic/react';
import { IonIcon, IonButton, IonModal } from '@ionic/react';
import { alarmOutline, barChartOutline, barbellOutline, calendarOutline, planetOutline, rocketOutline, starOutline, timerOutline } from 'ionicons/icons';
import { useState } from 'react';
import DurationSelector from './DurationSelectorContainer';
import ChoiceSelectorContainer from "./ChoiceSelectorContainer";
import { IonButtonCustomEvent } from '@ionic/core';

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
  equipmentLabel,
  weeklyGoalLabel,
  experienceLabel,
}) => {
  const [showDurationModal, setShowDurationModal] = useState(false);
  const [durationLabel, setDurationLabel] = useState('0 h 0 m 0 s'); // Initialize as needed

  const [showObjectiveModal, setShowObjectiveModal] = useState(false);
  const [selectedObjective, setSelectedObjective] = useState('Overall Fitness');

  const ObjectiveOptions = [
    { label: 'Muscle Growth', value: 'Muscle Growth' },
    { label: 'Overall Fitness', value: 'Overall Fitness' },
    { label: 'Weight Loss', value: 'Weight Loss' },
  ];

  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState('Overall Beginner');

  const ExperienceOptions = [
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Expert', value: 'Expert' },
  ];

 

  const handleDurationConfirmed = (duration: { hours: number, minutes: number, seconds: number }) => {
    const newDuration = duration.hours + " h " + duration.minutes + " m " + duration.seconds + " s";
    setDurationLabel(newDuration);
    setShowDurationModal(false);
  };
  
  const handleObjectiveConfirmed = (e:any) => {
    setSelectedObjective(e.detail.value);
    setShowObjectiveModal(false);
  };

  const handleExperienceConfirmed = (e:any) => {
    setSelectedExperience(e.detail.value);
    setShowExperienceModal(false);
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
            <IonLabel>{selectedObjective}</IonLabel>
            <IonButton onClick={() => setShowObjectiveModal(true)} className="duration-button">
              {selectedObjective}
            </IonButton>
            <IonModal isOpen={showObjectiveModal} onDidDismiss={() => setShowObjectiveModal(false)}>
              <ChoiceSelectorContainer
              options={ObjectiveOptions}
              selectedOption={selectedObjective}
              onChange={handleObjectiveConfirmed} />
              <IonButton onClick={() => setShowObjectiveModal(false)}>Cancel</IonButton>
            </IonModal>
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
            <IonLabel>{selectedExperience}</IonLabel>
            <IonButton onClick={() => setShowExperienceModal(true)} className="duration-button">
              {selectedExperience}
            </IonButton>
            <IonModal isOpen={showExperienceModal} onDidDismiss={() => setShowExperienceModal(false)}>
              <ChoiceSelectorContainer
              options={ExperienceOptions}
              selectedOption={selectedExperience}
              onChange={handleExperienceConfirmed}/>
              <IonButton onClick={() => setShowObjectiveModal(false)}>Cancel</IonButton>
            </IonModal>
          </IonItem>
        </div>
  );
};

export default TrainingContainer;
