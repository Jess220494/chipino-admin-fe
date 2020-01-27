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
    IonText
    } from '@ionic/react';
  import { book, build, colorFill, grid } from 'ionicons/icons';
  import React from 'react';
  import './Home.css';

  const HomePage = () => {
    return (
      <IonPage>


        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Oswald Cobblepot</IonTitle>
          </IonToolbar>
        </IonHeader>



        <IonContent>
          <IonCard className="welcome-card">
            <img src="/assets/shapes.svg" alt=""/>
            <IonCardHeader>
              <IonCardSubtitle>Squaids really loves</IonCardSubtitle>
              <IonCardTitle>Chester and Ozzy</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                Now that your app has been created, you'll want to start building out features and
                components. Check out some of the resources below for next steps.
              </p>
            </IonCardContent>
          </IonCard>

          <IonCard className="welcome-card">
            <img src="/assets/shapes.svg" alt=""/>
            <IonCardHeader>
              <IonCardSubtitle><IonText color="secondary">Test 123</IonText></IonCardSubtitle>
              <IonCardTitle><IonText color="secondary">Test 1</IonText></IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                <IonText color="secondary">Ion card text 1</IonText>
              </p>
            </IonCardContent>
          </IonCard>

          <IonCard className="welcome-card">
            <img src="/assets/shapes.svg" alt=""/>
            <IonCardHeader>
              <IonCardSubtitle><IonText color="dark">Test 123</IonText></IonCardSubtitle>
              <IonCardTitle><IonText color="dark">Test 2</IonText></IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                <IonText color="dark"> Ioncard text 2</IonText>
              </p>
            </IonCardContent>
          </IonCard>

          <IonCard className="welcome-card">
            <img src="/assets/shapes.svg" alt=""/>
            <IonCardHeader>
              <IonCardSubtitle><IonText color="primary">Test 123</IonText></IonCardSubtitle>
              <IonCardTitle><IonText color="primary">Test 3</IonText></IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                <IonText color="primary">Ion card test 3</IonText>
              </p>
            </IonCardContent>
          </IonCard>

          <IonCard className="welcome-card">
            <img src="/assets/shapes.svg" alt=""/>
            <IonCardHeader>
              <IonCardSubtitle><IonText color="danger">Test 123</IonText></IonCardSubtitle>
              <IonCardTitle><IonText color="danger">Test 4</IonText></IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                <IonText color="danger">Ion card test 4</IonText> 
              </p>
            </IonCardContent>
          </IonCard>
  
          <IonList lines="none">
            <IonListHeader>
              <IonLabel>Resources</IonLabel>
            </IonListHeader>
            <IonItem href="https://ionicframework.com/docs/" target="_blank">
              <IonIcon slot="start" color="medium" icon={book} />
              <IonLabel>Ionic Documentation</IonLabel>
            </IonItem>
            <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
              <IonIcon slot="start" color="medium" icon={build} />
              <IonLabel>Scaffold Out Your App</IonLabel>
            </IonItem>
            <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
              <IonIcon slot="start" color="medium" icon={grid} />
              <IonLabel>Change Your App Layout</IonLabel>
            </IonItem>
            <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
              <IonIcon slot="start" color="medium" icon={colorFill} />
              <IonLabel>Theme Your App</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default HomePage;
  