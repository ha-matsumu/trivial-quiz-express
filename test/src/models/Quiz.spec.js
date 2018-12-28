const assert = require("power-assert");
const Quiz = require("../../../src/models/Quiz");

const quizTestData = {
  category: "Entertainment: Video Games",
  correct_answer: "True",
  difficulty: "medium",
  incorrect_answers: ["False"],
  question: "Amazon acquired Twitch in August 2014 for $970 million dollars.",
  type: "boolean",
};

describe("Quizクラス", () => {
  it("プロパティ確認", () => {
    const quiz = new Quiz(quizTestData);
    assert.equal(quiz.category, "Entertainment: Video Games");
    assert.equal(quiz.correctAnswer, "True");
    assert.equal(quiz.difficulty, "medium");
    assert.equal(Array.isArray(quiz.incorrectAnswers), true);
    assert.equal(quiz.question, "Amazon acquired Twitch in August 2014 for $970 million dollars.");
    assert.equal(quiz.type, "boolean");
  });
});