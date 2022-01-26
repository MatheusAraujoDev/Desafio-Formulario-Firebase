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

// database: Survey
// vib9rq3KnMSHhJzsQNOD
// coleção: questions

// {username: nome}
// {question1: resposta1, question2: resposta2}