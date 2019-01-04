const assert = require("power-assert");
const QuizFetcher = require("../../../src/models/QuizFetcher");

describe("QuizFetcherクラスのテスト", () => {
  it("getQuizDataListの動作チェック", () => {
    return QuizFetcher.getQuizDataList().then(quizInstances => {
      assert.equal(
        Array.isArray(quizInstances),
        true,
        "quizInstancesは配列ではありません。"
      );
      quizInstances.forEach(quiz => {
        assert.equal(
          typeof quiz.category,
          "string",
          "categoryはstring型ではありません。"
        );
        assert.equal(
          typeof quiz.correctAnswer,
          "string",
          "correctAnswerはstring型ではありません。"
        );
        assert.equal(
          typeof quiz.difficulty,
          "string",
          "difficultyはstring型ではありません。"
        );
        assert.equal(
          Array.isArray(quiz.incorrectAnswers),
          true,
          "incorrectAnswersは配列ではありません。"
        );
        quiz.incorrectAnswers.forEach(incorrectAnswer => {
          assert.equal(
            typeof incorrectAnswer,
            "string",
            "incorrectAnswersに格納されている値は文字列ではありません。"
          );
        });
        assert.equal(
          typeof quiz.question,
          "string",
          "questionはstring型ではありません。"
        );
        assert.equal(
          typeof quiz.type,
          "string",
          "typeはstring型ではありません。"
        );
      });
    });
  });
});
