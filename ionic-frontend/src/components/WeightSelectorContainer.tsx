// DurationSelector.js
import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';


const WeightSelector = ({ OnConfirm }) => {
  const [weight, setWeight] = useState(0);

  return (
    <div>
      <IonItem>
        <IonLabel position="floating">lbs</IonLabel>
        <IonInput
          type="number"
          value={weight}
          onIonChange={(e) => setWeight(Number(e.detail.value))}
        ></IonInput>
      </IonItem>
      <IonButton expand='full' onClick={OnConfirm}>Confirm</IonButton>
    </div>
  );
};

export default WeightSelector;
