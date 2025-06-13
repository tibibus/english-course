const quiz = [
  {
    question: "What time do you usually _____ breakfast?",
    answers: ["have", "has", "having", "had"],
    correct: 0
  },
  {
    question: "Яка найбільша планета?",
    answers: ["Марс", "Земля", "Юпітер", "Венера"],
    correct: 2
  },
  {
    question: "Скільки континентів на Землі?",
    answers: ["5", "6", "7", "8"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = quiz[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  resultEl.textContent = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.classList.add("answer");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(index) {
  const correct = quiz[currentQuestion].correct;
  if (index === correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.textContent = "Результат:";
  answersEl.innerHTML = "";
  resultEl.textContent = `Ви набрали ${score} з ${quiz.length} балів.`;
}
showQuestion();
