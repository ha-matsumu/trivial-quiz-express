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

const quiz = new Quiz(quizTestData);
describe("Quizクラスのテスト", () => {
  it("categoryの型チェック", () => {
    assert.equal(typeof quiz.category, "string", "string型ではありません。");
  });

  it("correctAnswerの型チェック", () => {
    assert.equal(typeof quiz.correctAnswer, "string", "string型ではありません。");
  });

  it("difficultyの型チェック", () => {
    assert.equal(typeof quiz.difficulty, "string", "string型ではありません。");
  });

  it("incorrectAnswersの型チェック", () => {
    assert.equal(Array.isArray(quiz.incorrectAnswers), true, "配列ではありません。");
  });

  it("incorrectAnswersに格納されている値の型チェック", () => {
    assert.equal(typeof quiz.incorrectAnswers[0], "string", "string型ではありません。");
  });

  it("questionの型チェック", () => {
    assert.equal(typeof quiz.question, "string", "string型ではありません。");
  });

  it("typeの型チェック", () => {
    assert.equal(typeof quiz.type, "string", "string型ではありません。");
  });
});