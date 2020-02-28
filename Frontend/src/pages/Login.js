import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton
    } from '@ionic/react';

import React, {Component} from 'react';
import * as login_object from '../api/login';

class Login extends Component {
    async componentDidMount(){
        console.log(await login_object.getProfile('user123', 'password123'))
    }
    render(){
        return(
            <div>
                <IonItem>
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput></IonInput>
                </IonItem>
                <IonButton>Login Now</IonButton>
                
            </div>
        )
    }
}

export default Login;
