import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Menu from './components/Menu';
import Home from './pages/Home';
import List from './pages/List';
import Ozzy from './pages/Ozzy';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { home, list } from 'ionicons/icons';

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

const appPages = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'List',
    url: '/home/list',
    icon: list
  },
  {
    title: 'Ozzy',
    url: '/home/ozzy',
    icon: home
  },
  {
    title: 'Login',
    url: '/login',
    icon: home
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: home
  }
];

const App = () => (
  <IonApp>
    <IonReactRouter>
      {/* <IonSplitPane contentId="main"> */}
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/list" component={List} exact={true} />
          <Route path="/home/ozzy" component={Ozzy} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route path="/profile" component={Profile} exact={true} />
          <Route path="/" render={() => <Redirect to="/home"/> } exact={true} />
        </IonRouterOutlet>
      {/* </IonSplitPane> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
