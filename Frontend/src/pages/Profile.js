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
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonThumbnail,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton
    } from '@ionic/react';

import React, {Component} from 'react';
import * as profile_object from '../api/profile';

class Profile extends Component {
    state = {
        username: '', 
        title: '',
        createdOn: '',
        avatar: '',
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
    
    // handleOnInputTitle = (event) => {
    //     this.setState({title: event})
    // }

    // handleOnInputCreatedOn = (event) => {
    //     this.setState({createdOn: event})
    // }

    handleOnClick = async() => {
        let output = await profile_object.getProfile(this.state.username)
        this.setState({title: output.data.title})
        this.setState({createdOn: output.data.createdOn})
        this.setState({avatar: output.data.avatar})
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
                {/* <IonItem>
                    <IonLabel position="floating">Title</IonLabel>
                    <IonInput onIonChange={(e)=>this.handleOnInputPassword(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Created</IonLabel>
                    <IonInput onIonChange={(e)=>this.handleOnInputCreatedOn(e.target.value)}></IonInput>
                </IonItem> */}
                <IonButton onClick={()=>this.handleOnClick()}>See Profile</IonButton>
                {console.log(this.state.username)}
                {/* {console.log(this.state.title)} */}
                {console.log(this.state.backend_output)}  

                <div>
                    <IonLabel>{this.state.username}</IonLabel><br/>
                    <IonLabel>{this.state.title}</IonLabel><br/>
                    <IonLabel>{this.state.createdOn}</IonLabel><br/>
                    <img src={this.state.avatar} />
                </div>

            </div>


        )
    }
}

export default Profile;