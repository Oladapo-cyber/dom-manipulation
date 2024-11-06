// Get the color picker input element and the body element
const colorPickerInput = document.getElementById("color-picker-input");
const body = document.querySelector("body");
let color;

// Log the color picker input element to the console
console.log(colorPickerInput);

// Add an event listener to the color picker input to handle color changes
colorPickerInput.addEventListener("input", (e) => {
  // Log the selected color value to the console
  console.log(e.target.value);
  // Update the color variable with the selected color value
  color = e.target.value;
});

// Add an event listener to the document to handle keypress events
document.addEventListener("keypress", (e) => {
  // Check if the pressed key is "Enter"
  if (e.key === "Enter") {
    // Change the background color of the body to the selected color
    body.style.backgroundColor = color;
  }
});

//The below code is the word counter javascript
// Get the word counter elements
const wordCountTextArea = document.getElementById("word-counter-textarea");
const wordCountP = document.getElementById("word-count");
const startCountButton = document.getElementById("start-count-btn");

// Log the word counter elements to the console
console.log(startCountButton, wordCountP, wordCountTextArea);

// Clear the text area value
wordCountTextArea.value = "";

let wordCountValue = 0;
let wordCountTextAreaValue = "";

// Add an event listener to the text area to handle input events
wordCountTextArea.addEventListener("input", (e) => {
  // Log the text area value to the console
  console.log(e.target.value);
  // Update the text area value variable with the current value
  wordCountTextAreaValue = e.target.value;
});

// Add an event listener to the start count button to handle click events
startCountButton.addEventListener("click", () => {
  // Split the text area value by spaces and count the words
  wordCountValue = wordCountTextAreaValue.split(" ").length;
  // Update the word count paragraph with the word count value
  wordCountP.textContent = `Word Count: ${wordCountValue}`;
});
