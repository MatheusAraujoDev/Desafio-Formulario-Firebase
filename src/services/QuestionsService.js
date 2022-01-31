import { db } from '../firebase';

export const QuestionService = {
  async getQuestions() {
    const data = await db.collection("questions").get();
    let questions = [];
    data.forEach((doc) => {
      questions.push(doc.data());
    })
    return questions;
  },

  async sendQuestions(question1, question2) {
    await db.collection("questions").add({
      question1,
      question2
    })
  }
}

// Obter dados de uma coleção
// https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0#:~:text=condi%C3%A7%C3%A3o%20e%20use-,get,-()%20para%20recuperar%20os

// Adicionar item ao banco
// https://firebase.google.com/docs/firestore/manage-data/add-data?authuser=0#:~:text=isso%2C%20basta%20chamar-,add,-()%3A
