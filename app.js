// app.js
const riddles = [
  { question: "What has keys but can't open locks?", answer: "keyboard" },
  { question: "What has to be broken before you can use it?", answer: "egg"},
  // Add more riddles here
];

let currentRiddleIndex = 0;
let score = 0;
let startTime = Date.now();

const riddleElement = document.getElementById("riddle");
const answerElement = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const skipButton = document.getElementById("skip");
const hintButton = document.getElementById("hint");
const quitButton = document.getElementById("quit");

function showRiddle() {
  riddleElement.textContent = riddles[currentRiddleIndex].question;
}


function showMessage(message, isSuccess) {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.className = `fixed top-0 right-0 bg-${isSuccess ? "green" : "red"}-500 text-white p-4 rounded mt-4 mr-4 z-10`;
  document.body.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 3000);
}

function checkAnswer() {
  const userAnswer = answerElement.value.trim().toLowerCase();
  if (userAnswer === riddles[currentRiddleIndex].answer) {
    score++;
    showMessage("Congratulations! Correct answer.", true);
  } else {
    showMessage("Oops! It's wrong.", false);
  }
  currentRiddleIndex++;
  if (currentRiddleIndex >= riddles.length) {
    currentRiddleIndex = 0;
  }
  answerElement.value = "";
  showRiddle();
}

submitButton.addEventListener("click", checkAnswer);
skipButton.addEventListener("click", () => {
  currentRiddleIndex++;
  if (currentRiddleIndex >= riddles.length) {
    currentRiddleIndex = 0;
  }
  answerElement.value = "";
  showRiddle();
});

hintButton.addEventListener("click", () => {
  alert(`Hint: ${riddles[currentRiddleIndex].answer[0]}...`);
});

quitButton.addEventListener("click", () => {
  const timeTaken = Math.floor((Date.now() - startTime) / 1000);
  alert(`Your score: ${score}\nTime taken: ${timeTaken} seconds`);
  window.location.reload();
});

showRiddle();
