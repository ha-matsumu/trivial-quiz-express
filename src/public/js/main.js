const divCurrentQuizQuestion = document.getElementById("currentQuizQuestion");
const ulCurrentQuizAnswers = document.getElementById("currentQuizAnswers");

const quizDataList = [];
const currentQuizIndex = 0;

// 自作API経由でクイズデータを取得する
fetch("http://localhost:3000/api/quiz")
  .then(response => {
    return response.json();
  })
  .then(quizObjects => {
    quizObjects.forEach(quizObject => {
      quizDataList.push(quizObject);
    });
    console.log("クイズデータ : ", quizDataList); // TODO:あとで消す
    appendCurrentQuizToContainer();
  });

// 取得したクイズデータをコンテナに表示する
function appendCurrentQuizToContainer() {
  // 問題文を表示する
  const currentQuiz = quizDataList[currentQuizIndex];
  const currentQuestionText = `Q${currentQuizIndex + 1}. ${
    currentQuiz.question
  }`;

  divCurrentQuizQuestion.textContent = currentQuestionText;

  // シャッフルした解答一覧を表示する
  while (ulCurrentQuizAnswers.firstChild) {
    ulCurrentQuizAnswers.removeChild(ulCurrentQuizAnswers.firstChild);
  }

  shuffleAnswers(currentQuiz).forEach(shuffleAnswer => {
    const liCurrentQuizAnswer = document.createElement("li");
    liCurrentQuizAnswer.textContent = shuffleAnswer;
    ulCurrentQuizAnswers.appendChild(liCurrentQuizAnswer);
  });
}

// 取得したクイズデータからシャッフルした解答一覧を作成する
function shuffleAnswers(_currentQuiz) {
  const answers = _currentQuiz.incorrectAnswers.slice();
  answers.push(_currentQuiz.correctAnswer);

  for (let i = 0; i < answers.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));

    const tmp = answers[i];
    answers[i] = answers[random];
    answers[random] = tmp;
  }

  return answers;
}
