import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText,
} from '@ionic/react';

const Control: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Control</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h2>Welcome to the Control Page</h2>
          <p>Here you can manage your devices and settings.</p>
        </IonText>
        <IonButton expand="block" color="primary">
          Control Device
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Control;
