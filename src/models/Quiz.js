class Quiz {
  constructor(_quizData) {
    this.category = _quizData.category;
    this.correctAnswer = _quizData.correct_answer;
    this.difficulty = _quizData.difficulty;
    this.incorrectAnswers = _quizData.incorrect_answers.slice();
    this.question = _quizData.question;
    this.type = _quizData.type;
  }
}

module.exports = Quiz;
