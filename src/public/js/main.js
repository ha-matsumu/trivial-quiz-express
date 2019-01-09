const divCurrentQuizQuestion = document.getElementById("currentQuizQuestion");
const ulCurrentQuizAnswers = document.getElementById("currentQuizAnswers");
const divNumberOfCorrectAnswers = document.getElementById(
  "numberOfCorrectAnswers"
);

let quizDataList = [];
let currentQuizIndex = 0;
let numberOfCorrectAnswers = 0;

// 自作API経由でクイズデータを取得する
fetch("http://localhost:3000/api/quiz")
  .then(response => {
    return response.json();
  })
  .then(quizObjects => {
    quizDataList = quizObjects;

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

    liCurrentQuizAnswer.addEventListener("click", () => {
      currentQuizIndex++;
      if (currentQuizIndex === quizDataList.length) {
        finishQuiz();
      } else {
        checkAnswer(liCurrentQuizAnswer.textContent, currentQuiz.correctAnswer);
        appendCurrentQuizToContainer();
      }
    });

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

// クイズの終了処理を行う
function finishQuiz() {
  const resultText = `Your Score<br>${numberOfCorrectAnswers} / ${
    quizDataList.length
  }`;

  divCurrentQuizQuestion.textContent = "";
  divNumberOfCorrectAnswers.innerHTML = resultText;

  while (ulCurrentQuizAnswers.firstChild) {
    ulCurrentQuizAnswers.removeChild(ulCurrentQuizAnswers.firstChild);
  }
}

// クイズの正誤確認を行う
function checkAnswer(_clickedAnswer, _correctAnswer) {
  if (_clickedAnswer === _correctAnswer) {
    numberOfCorrectAnswers++;
    alert("You got it right!!");
  } else {
    alert(
      `You got it wrong. The answer of this question is "${_correctAnswer}".`
    );
  }
}
