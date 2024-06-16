import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonInput, IonCheckbox, IonButton, IonMenuButton, IonPage, IonTitle, IonRow, IonCol, IonIcon, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import { useState } from 'react';
import { personCircleOutline, laptopOutline, keyOutline, settingsSharp } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import React from 'react';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('demo@mph.com');
  const [password, setPassword] = useState<string>('123');

  const handleLogin = () => {
    // Add any logic needed for authentication here
    history.push('/devices');
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <center>
          <div>
            <IonIcon className="icon-right" style={{ fontSize: '80px', color: '#000', marginTop: 50 }} icon={settingsSharp} />
          </div>
        </center>
        <IonRow>
          <IonCol>
            <IonRow>
              <IonCol>
                <center>
                  <IonLabel style={{ fontSize: 20 }}>Login</IonLabel>
                  <p></p>
                  <IonLabel style={{ fontSize: 20 }}>Multi Purpose Hinge Demo</IonLabel>
                </center>
              </IonCol>
            </IonRow>
            <IonRow style={{ margin: 20 }}>
              <IonCol>
                <IonInput
                  type="text"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  aria-label="Email"
                  placeholder="Email">
                  <IonIcon slot="start" ios={personCircleOutline} md={personCircleOutline}></IonIcon>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow style={{ margin: 20 }}>
              <IonCol>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  aria-label="Password"
                  placeholder="Password">
                  <IonIcon slot="start" ios={keyOutline} md={keyOutline}></IonIcon>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow style={{ margin: 20 }}>
              <IonCol>
                <IonButton expand="block" onClick={handleLogin}>
                  Login
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
