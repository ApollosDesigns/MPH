import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonInput, IonCardContent, IonButton, IonMenuButton, IonPage, IonTitle, IonRow, IonCol, IonIcon, useIonLoading, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import React, { useEffect, useState, useRef } from "react";
import { personCircleOutline, laptopOutline, keyOutline, settingsSharp, addCircleSharp } from 'ionicons/icons';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { getConfig } from '@ionic/react';

type Device = {
  id: string;
  state: string;
};

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const Devices: React.FC = () => {
  const history = useHistory();
  const [devices, setDevices] = useState<Device[]>([]);
  const [present, dismiss] = useIonLoading();

  useInterval(() => {
    getDevices();
  }, 1000 * 1);

  const addDevice = () => {
    history.push('/adddevice');
  };

  const getDevices = () => {
    const api = axios.create({
      baseURL: "http://3.140.70.42:3000"
    });
    api.get("/get-devices")
      .then((res) => {
        const newDevices = [
          ...res.data.devices
        ];
        setDevices(newDevices);
      });
  };

  const setState = (id: string, state: number) => {
    present({
      message: 'Sending',
      duration: 1000
    });
    const api = axios.create({
      baseURL: "http://3.140.70.42:3000"
    });
    api.get("/set-state", {
      params: {
        id: id,
        state: state
      }
    })
      .then((res) => {
        getDevices();
        const newDevices = [
          ...res.data.devices
        ];
        setDevices(newDevices);
      });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow>
          <IonCol>
            <IonLabel style={{ margin: 10, fontSize: 20 }}>Device List</IonLabel>
            <p></p>

            {devices.map((device, index) => {
              return (
                <IonCard key={index}>
                  <IonRow>
                    <IonCol>
                      <IonCardHeader>
                        <IonCardTitle>Hinge Device</IonCardTitle>
                        <IonCardSubtitle>id: {device.id}</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent style={{ fontSize: 20, fontWeight: "bold" }}>
                        {device.state === "1" ? "Locked" : "Unlocked"}
                      </IonCardContent>
                    </IonCol>
                    <IonCol>
                      <IonButton style={{ margin: 10, float: "right" }} size="large" fill="outline" onClick={() => {
                        let newState = device.state === "1" ? 0 : 1;
                        setState(device.id, newState);
                      }}>
                        {device.state === "1" ? "Unlock" : "Lock"}
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCard>
              );
            })}

            <IonButton style={{ margin: 10 }} size="large" fill="outline" onClick={addDevice}>
              <IonIcon slot="icon-only" ios={addCircleSharp} md={addCircleSharp}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Devices;
