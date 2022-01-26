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