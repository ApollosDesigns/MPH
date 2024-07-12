/*
MY Ai Cmds
# Load Model
python scripts/ai_automation.py --load-model "models/best_model.keras" --predict --input-data-path "path/to/input_data.npy"
# Create Folder
python scripts/ai_automation.py --create-folder "new_folder"
# Create File
python scripts/ai_automation.py --create-file "new_folder/new_file.txt" --file-content "This is a new file."
# Launch Apps
python scripts/ai_automation.py --launch-app "firefox"
# Launch Websites
python scripts/ai_automation.py --launch-website "https://www.example.com"
# Train AI Models
python scripts/ai_automation.py --train-model --data-path "path/to/data.npz" --model-save-path "models/new_model.h5"
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
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

// Initialize Ionic React
setupIonicReact();

// Main App component
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

// Render the App component to the root element
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

export default App;
