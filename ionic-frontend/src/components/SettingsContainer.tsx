import './ExploreContainer.css';
import { IonPage, IonContent, IonItem, IonLabel } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import TrainingContainer from './TrainingContainer';
import YouContainer from './YouContainer';


interface SettingsContainerProps {
  name: string;
}

const SettingsContainer: React.FC<SettingsContainerProps> = ({ name }) => {
  return (
        <div className='container'>
          <TrainingContainer 
          name="Training Container"
          routineLabel="3 day classic"
          durationLabel="30 minutes"
          objectiveLabel="Build strength"
          equipmentLabel="Dumbbells"
          weeklyGoalLabel="Gain muscle"
          experienceLabel="Intermediate"
          restTimerLabel="60 seconds"></TrainingContainer>
          <YouContainer name='YouContainer'></YouContainer>
        </div>
  );
};

export default SettingsContainer;
