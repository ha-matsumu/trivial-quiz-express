const assert = require("power-assert");
const QuizFetcher = require("../../../src/models/QuizFetcher");
const Quiz = require("../../../src/models/Quiz");

describe("QuizFetcherクラスのテスト", () => {
  it("getQuizDataListの動作チェック", () => {
    return QuizFetcher.getQuizDataList().then(quizInstances => {
      assert.equal(
        Array.isArray(quizInstances),
        true,
        "quizInstancesは配列ではありません。"
      );
      quizInstances.forEach(quizInstance => {
        assert.equal(
          quizInstance instanceof Quiz,
          true,
          "Quizクラスのインスタンスではありません。"
        );
      });
    });
  });
});
