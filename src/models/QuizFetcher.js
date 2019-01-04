const fetch = require("node-fetch");
const Quiz = require("./Quiz");

class QuizFetcher {
  static getQuizDataList() {
    return fetch("https://opentdb.com/api.php?amount=10")
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        return responseJson.results;
      })
      .then(quizDataList => {
        const quizInstances = [];
        quizDataList.forEach(quizData => {
          quizInstances.push(new Quiz(quizData));
        });
        return quizInstances;
      });
  }
}

module.exports = QuizFetcher;
