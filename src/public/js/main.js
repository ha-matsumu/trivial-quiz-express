const quizInstances = [];

// TODO: この中のソースを次のステップで1つのクラスとして作成する
fetch("https://opentdb.com/api.php?amount=10") // TODO: 最終的にfetch('localhost:3000/〇〇')に変更する
  .then(response => {
    return response.json();
  })
  .then(json => {
    return json.results;
  })
  .then(quizDataList => {
    quizDataList.forEach(quizData => {
      quizInstances.push(new Quiz(quizData));
    });
    console.log("クイズデータ : ", quizInstances);
  });
