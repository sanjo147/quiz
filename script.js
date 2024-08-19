// Quiz questions and answers
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("ques");
const optionsEl = document.getElementById("opt");
const submitBtn = document.getElementById("btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;

    optionsEl.innerHTML = "";
    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        optionsEl.innerHTML += `
            <input type="radio" name="quiz" id="option${i}" value="${i}">
            <label for="option${i}">${option}</label><br>
        `;
    }
}

function checkAns() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
}

function showResults() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.style.display = "none";
    submitBtn.style.display = "none";
    scoreEl.textContent = `You scored ${score} out of ${quizData.length}`;
}

// Initialize the quiz
loadQuestion();