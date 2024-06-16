import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import Devices from './pages/Devices';
import AddDevice from './pages/AddDevice';
import Control from './pages/Control';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="main">
        <Route path="/" exact={true}>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/devices" exact={true} component={Devices} />
        <Route path="/adddevice" exact={true} component={AddDevice} />
        <Route path="/control" exact={true} component={Control} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
