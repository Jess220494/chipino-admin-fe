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
    state = {
        username: '', 
        password: '',
        backend_output: ''
    }
    async componentDidMount(){
        console.log('whatever')
    }
    // handleOnInputUsername(event){

    // }
    // handleOnInputPassword(event){

    // }
    // handleOnClick(){

    // }
    handleOnInputUsername = (event) => {
        this.setState({username: event})
    }
    
    handleOnInputPassword = (event) => {
        this.setState({password: event})
    }

    handleOnClick = async() => {
        let output = await login_object.getProfile(this.state.username, this.state.password)
        this.setState({backend_output: output})
    }

    printOutput = ()=> {
        return this.state.backend_output
    }

    render(){
        return(
            <div>
                <IonItem>
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput onIonChange={(e)=>this.handleOnInputUsername(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput onIonChange={(e)=>this.handleOnInputPassword(e.target.value)}></IonInput>
                </IonItem>
                <IonButton onClick={()=>this.handleOnClick()}>Login Now</IonButton>
                {console.log(this.state.username)}
                {console.log(this.state.password)}
                {console.log(this.state.backend_output)}  

            </div>
        )
    }
}

export default Login;
