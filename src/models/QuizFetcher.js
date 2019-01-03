const Quiz = require("./Quiz");
const fetch = require("node-fetch");

class QuizFetcher {
  getQuizDataList() {
    const quizInstances = [];

    fetch("https://opentdb.com/api.php?amount=10")
      .then(response => {
        return response.json();
      })
      .then(resJson => {
        return resJson.results;
      })
      .then(quizDataList => {
        quizDataList.forEach(quizData => {
          quizInstances.push(new Quiz(quizData));
        });
      });

    return quizInstances;
  }
}

module.exports = QuizFetcher;
