import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonInput, IonCheckbox, IonButton, IonMenuButton, IonPage, useIonLoading, IonRow, IonCol, IonIcon, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import React, { useEffect, useState } from "react";
import { personCircleOutline, keyOutline, settingsSharp } from 'ionicons/icons';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { getConfig } from '@ionic/react';

const AddDevice: React.FC = () => {
  const history = useHistory();
  const [present, dismiss] = useIonLoading();
  const [ssid, setSSID] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const saveCreds = () => {
    present({
      message: 'Sending wifi credentials...',
      duration: 2000
    });

    const api = axios.create({
      baseURL: "http://192.168.4.1"
    });

    api.get("/wifi", {
      params: {
        ssid: ssid,
        pass: pass
      }
    })
    .then((res) => {
      history.push('/devices');
    })
    .catch((error) => {
      console.error("Error sending credentials:", error);
    });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow>
          <IonCol>
            <IonLabel style={{ fontSize: 20, margin: 10 }}>Enter Wifi Credentials</IonLabel>
            <IonLabel style={{ fontSize: 16, margin: 10 }}>Make sure your wifi is connected</IonLabel>
            <p></p>
          </IonCol>
        </IonRow>

        <IonRow style={{ margin: 20 }}>
          <IonCol>
            <IonInput
              type="text"
              value={ssid}
              placeholder="SSID"
              onIonChange={(e) => setSSID(e.detail.value!)}
            >
              <IonIcon slot="start" ios={personCircleOutline} md={personCircleOutline}></IonIcon>
            </IonInput>
          </IonCol>
        </IonRow>

        <IonRow style={{ margin: 20 }}>
          <IonCol>
            <IonInput
              type="password"
              value={pass}
              placeholder="Password"
              onIonChange={(e) => setPass(e.detail.value!)}
            >
              <IonIcon slot="start" ios={keyOutline} md={keyOutline}></IonIcon>
            </IonInput>
          </IonCol>
        </IonRow>

        <IonRow style={{ margin: 20 }}>
          <IonCol>
            <IonButton expand="block" onClick={saveCreds}>
              Save Credentials
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default AddDevice;
