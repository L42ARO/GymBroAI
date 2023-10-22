// account/name/weight/height/units/age
import './YouContainer.css';
import { IonPage, IonContent, IonItem, IonLabel } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import { alarmOutline, barChartOutline, barbellOutline, bodyOutline, calendarOutline, diamondOutline, personOutline, planetOutline, rocketOutline, scaleOutline, starOutline, timerOutline } from 'ionicons/icons';
import { useState } from 'react';
import { IonButton, IonModal } from '@ionic/react';
import WeightSelector from './WeightSelectorContainer';
import HeightSelector from './HeightSelectorContainer';
import AgeSelector from './AgeSelectorContainer';
import ChoiceSelectorContainer from './ChoiceSelectorContainer';


interface YouContainerProps {
  name: string;
}

const YouContainer: React.FC<YouContainerProps> = ({name}) => {
  const [showHeightModal, setShowHeightModal] = useState(false);
  const [heightLabel, setHeightLabel] = useState("0 ft 0 inch"); // Initialize as needed

  const handleHeightConfirmed = (height: { feet: Number, inches: Number}) => {
    const newHeight = height.feet + " ft " + height.inches + " inch ";
    setHeightLabel(newHeight);
    setShowHeightModal(false);
  };

  const [showWeightModal, setShowWeightModal] = useState(false);
  const [WeightLabel, setWeightLabel] = useState(0); // Initialize as needed

  const handleWeightConfirmed = (e:number) => {
    console.log(e);
    const weight = e; 
    setWeightLabel(weight);
    setShowWeightModal(false);
  };

  const [showAgeModal, setShowAgeModal] = useState(false);
  const [AgeLabel, setAgeLabel] = useState(0); // Initialize as needed

  const handleAgeConfirmed = (e:number) => {
    console.log(e);
    const age = e; 
    setAgeLabel(age);
    setShowAgeModal(false);
  };

  const [showGendreModal, setShowGendreModal] = useState(false);
  const [selectedGendre, setSelectedGendre] = useState('');

  const GendreOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Non-Binary', value: 'Non-Binary' },
    { label: 'Prefer Not To Disclose', value: 'No Disclosure' },
  ];

  const handleGendreConfirmed = (e:any) => {
    setSelectedGendre(e.detail.value);
    setShowGendreModal(false);
  };



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
            <IonIcon icon={personOutline}></IonIcon>
            <IonLabel>Height</IonLabel>
            <IonButton onClick={() => setShowHeightModal(true)} className="duration-button">
              {heightLabel}
            </IonButton>
            <IonModal isOpen={showHeightModal} onDidDismiss={() => setShowHeightModal(false)}>
              <HeightSelector OnConfirm={handleHeightConfirmed} />
              <IonButton onClick={() => setShowHeightModal(false)}>Cancel</IonButton>
            </IonModal>
          </IonItem>

          <IonItem>
            <IonIcon icon={personOutline}></IonIcon>
            <IonLabel>Weight</IonLabel>
            <IonButton onClick={() => setShowWeightModal(true)} className="duration-button">
              {String(WeightLabel)}
            </IonButton>
            <IonModal isOpen={showWeightModal} onDidDismiss={() => setShowWeightModal(false)}>
              <WeightSelector OnConfirm={handleWeightConfirmed} />
              <IonButton onClick={() => setShowWeightModal(false)}>Cancel</IonButton>
            </IonModal>
          </IonItem>

          <IonItem>
            <IonIcon icon={rocketOutline}></IonIcon>
            <IonLabel>Age</IonLabel>
            <IonButton onClick={() => setShowAgeModal(true)} className="duration-button">
              {String(AgeLabel)}
            </IonButton>
            <IonModal isOpen={showAgeModal} onDidDismiss={() => setShowAgeModal(false)}>
              <AgeSelector OnConfirm={handleAgeConfirmed} />
              <IonButton onClick={() => setShowAgeModal(false)}>Cancel</IonButton>
            </IonModal>
          </IonItem>
          <IonItem>
            <IonIcon icon={planetOutline}> </IonIcon>
            <IonLabel>Gendre</IonLabel>
            <IonLabel>{selectedGendre}</IonLabel>
            <IonButton onClick={() => setShowGendreModal(true)} className="duration-button">
              {selectedGendre}
            </IonButton>
            <IonModal isOpen={showGendreModal} onDidDismiss={() => setShowGendreModal(false)}>
              <ChoiceSelectorContainer
              options={GendreOptions}
              selectedOption={selectedGendre}
              onChange={handleGendreConfirmed}/>
              <IonButton onClick={() => setShowGendreModal(false)}>Cancel</IonButton>
            </IonModal>
          </IonItem>
        </div>
  );
};

export default YouContainer;
