// Array of sentences to be used for typing test
const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "I love coding in HTML, CSS, and JavaScript.",
    "Learning new things is always exciting.",
    "Practice makes perfect.",
    "Web development is fun and challenging.",
    "Stay curious and keep learning.",
  ];
  
  // Get DOM elements
  const quoteElement = document.getElementById("quote");
  const inputElement = document.getElementById("input");
  const startButton = document.getElementById("start-btn");
  const resultButton = document.getElementById("result-btn");
  const wpmValue = document.getElementById("wpm-value");
  const restartButton = document.getElementById("restart-btn");
  const alertElement = document.getElementById("alert");
  
  let currentSentence = ""; // Store the current sentence to compare with user input
  let startTime; // Store the starting time of the test
  
  // Generate a random sentence from the sentences array
  function generateRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  }
  
  // Update the sentence in the HTML
  function updateSentence() {
    currentSentence = generateRandomSentence();
    quoteElement.textContent = currentSentence;
  }
  
  // Enable input field and start the typing test
  function startTyping() {
    inputElement.disabled = false;
    inputElement.value = "";
    inputElement.focus();
    startButton.disabled = true;
    resultButton.disabled = false;
    restartButton.disabled = true;
    alertElement.textContent = "";
    updateSentence();
    startTime = Date.now();
  }
  
  // Calculate words per minute (WPM)
  function calculateWPM() {
    const totalTime = (Date.now() - startTime) / 1000; // Total time in seconds
    const typedWords = inputElement.value.trim().split(" ").length; // Count of typed words
    const wpm = Math.round((typedWords / totalTime) * 60); // WPM calculation
    return wpm;
  }
  
  // Show typing speed result
  function showResult() {
    const wpm = calculateWPM();
    wpmValue.textContent = wpm;
    inputElement.disabled = true;
    startButton.disabled = false;
    resultButton.disabled = true;
    restartButton.disabled = false;
    alertElement.textContent = "Typing test completed!";
  }
  
  // Event listeners
  startButton.addEventListener("click", startTyping);
  resultButton.addEventListener("click", showResult);
  restartButton.addEventListener("click", startTyping);
  
