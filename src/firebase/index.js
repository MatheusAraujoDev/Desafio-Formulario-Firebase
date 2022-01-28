// Sintaxe retirada da documentação do firebase.
// https://firebase.google.com/docs/storage/web/start#:~:text=import%20%7B-,initializeApp,-%7D%20from%20%22firebase/app
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuMJUuJm7Y5VbZ9YwH5VuZhhqFLtOpA3M",
  authDomain: "desafio-tecnico-kpi.firebaseapp.com",
  databaseURL: "https://desafio-tecnico-kpi-default-rtdb.firebaseio.com",
  projectId: "desafio-tecnico-kpi",
  storageBucket: "desafio-tecnico-kpi.appspot.com",
  messagingSenderId: "1010258957150",
  appId: "1:1010258957150:web:7fe1f31786ac08c93675cf"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
