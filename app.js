const words = ["BROWN", "JUMPS", "SWING", "HEART", "APPLE"];
let wordIndex = 0;

function appendToDisplay(alphabet) {
  var displayBox = document.querySelector(".container-box");
  displayBox.textContent += alphabet;
}

let guessedLetters = [];

function checkGuess(letter) {
  const targetWord = words[wordIndex];
  const index = targetWord.indexOf(letter);

  if (index !== -1) {
    guessedLetters.push(letter);

    document.querySelectorAll(".container-box").forEach((box, i) => {
      if (targetWord[i] === letter) {
        box.textContent = letter;
        box.style.backgroundColor = "#79b851"; //green
        box.style.color = "white";
        box.style.fontWeight = "bold";
      }
    });

    if (guessedLetters.join("") === targetWord) {
      alert("Congratulations! You've guessed the word!");
      guessedLetters = []; 
      wordIndex = (wordIndex + 1) % words.length; 
      displayNewWord();
    }
  } else {
    const incorrectIndex = guessedLetters.length;
    const incorrectBox =
      document.querySelectorAll(".container-box")[incorrectIndex];
    incorrectBox.textContent = letter;
    incorrectBox.style.backgroundColor = "#f3c237"; //yellow
    incorrectBox.style.color = "white";
    incorrectBox.style.fontWeight = "bold";
  }
}

function appendToDisplay(letter) {
  checkGuess(letter.toUpperCase());
}

function displayNewWord() {
  const targetWord = words[wordIndex];
  document.querySelectorAll(".container-box").forEach((box, i) => {
    box.textContent = targetWord[i];
    box.style.backgroundColor = ""; 
    box.style.color = ""; 
    box.style.fontWeight = ""; 
  });
}

function clearLastCharacter() {
  var displayBoxes = document.querySelectorAll(".container-box");
  var lastBox = displayBoxes[displayBoxes.length - 1]; 
  var text = lastBox.textContent;
  lastBox.textContent = text.slice(0, -1);
}


