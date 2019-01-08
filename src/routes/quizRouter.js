const express = require("express");
const quizRouter = express.Router();
const QuizFetcher = require("../models/QuizFetcher");

quizRouter.get("/quiz", (req, res) => {
  QuizFetcher.getQuizDataList().then(quizInstances => {
    // 取得したクイズデータをJSON形式で送る
    res.json(quizInstances);
  });
});

module.exports = quizRouter;
