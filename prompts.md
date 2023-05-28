Prompt 1: Create a web based Guesss What I Am game. The game should have infinite riddles. There should be 4 buttons to submit the answer, to skip the question ,to quit the game and to reveal answer or give a hint. The game must go on until the users doesn't click on the quit button. For every correct answer give one point and for wrong answers give 0 points. When the users click the quit button show him his score along with the time he has taken to achieve the score. Design the game using Tailwind and keep dark mode. The questions should be in english and the solution should be case insensitive. Provide me with the code.

Output:
As a software engineer, I can provide you with a high-level overview of how to create the "Guess What I Am" game using HTML, CSS (Tailwind), and JavaScript. I'll break down the steps and provide code snippets for each part. You can then assemble and customize the code according to your requirements.

1. Set up the HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guess What I Am</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-900 text-white">
  <div id="app" class="container mx-auto">
    <!-- Game content goes here -->
  </div>
  <script src="app.js"></script>
</body>
</html>
```

2. Create the game interface using Tailwind CSS:

```html
<!-- Inside the #app div -->
<div class="flex flex-col items-center">
  <h1 class="text-4xl mb-8">Guess What I Am</h1>
  <p id="riddle" class="text-xl mb-4"></p>
  <input id="answer" class="bg-gray-200 text-black p-2 mb-4" type="text" placeholder="Your answer">
  <div class="flex space-x-4">
    <button id="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    <button id="skip" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Skip</button>
    <button id="hint" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Hint</button>
    <button id="quit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Quit</button>
  </div>
</div>
```

3. Implement the game logic using JavaScript:

```javascript
// app.js
const riddles = [
  { question: "What has keys but can't open locks?", answer: "keyboard" },
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

function checkAnswer() {
  const userAnswer = answerElement.value.trim().toLowerCase();
  if (userAnswer === riddles[currentRiddleIndex].answer) {
    score++;
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
```

This code provides a basic implementation of the game. You can add more riddles to the `riddles` array and customize the styling as needed. Note that this implementation uses a simple array for riddles, which means it's not infinite. To achieve an infinite number of riddles, you could fetch riddles from an API or create a more advanced algorithm to generate them.

Prompt 2: write code to display congratulations message for correct answer or oops! it's wrong for wrong answer in above game

Output:
To display a congratulations message for a correct answer and an "Oops! It's wrong" message for a wrong answer, you can modify the `checkAnswer` function and add a new function to display the message. Here's the updated JavaScript code:

```javascript
// app.js
// ... (previous code)

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

// ... (previous code)
```

The `showMessage` function creates a new `div` element with the message text and applies the appropriate background color based on whether the answer is correct or not. The message is displayed for 3 seconds before being removed. The `checkAnswer` function now calls `showMessage` with the appropriate message and success status.

That's it! Enjoy!
