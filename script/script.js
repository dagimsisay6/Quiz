const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },

  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1,
  },

  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyperlink Text Makeup Language",
    ],
    correct: 2,
  },

  {
    question: "Which language is used for styling web pages?",
    options: ["Python", "CSS", "Java", "C#"],
    correct: 1,
  },
];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

let currentQuestion = 0;
let userAnswers = [];

function showQuestion() {
  const data = quizData[currentQuestion];
  questionEl.innerText =
    `Q${currentQuestion + 1}. ${data.question}`;
  answersEl.innerHTML = "";
  
  data.options.forEach((option, index) => {
    answersEl.innerHTML += `
      <label class="answer-item">
        <input 
          type="radio" 
          name="answer" 
          value="${index}"
          ${userAnswers[currentQuestion] == index ? "checked" : ""}
        >
        ${option}
      </label>
    `;
});

backBtn.style.display = currentQuestion === 0 ? "none" : "block";
nextBtn.innerText = currentQuestion === quizData.length - 1 ? "Finish" : "Next";
}

showQuestion();