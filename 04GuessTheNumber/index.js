let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

//----------------------------------------------------------------

if (playGame) {

  submit.addEventListener('click', function (e) {

    e.preventDefault();
    const guess = parseInt(userInput.value);
   // console.log(guess);
    validateGuess(guess);

  });
}

//---------------------------------------------------------------------


//validate the guess
function validateGuess(guess) {

  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  }
   else if (guess < 1) {
    alert('PLease enter a number more than 0');
  }
   else if (guess > 100) {
    alert('PLease enter a  number less than 101');
  } 
  else {

    //array
    prevGuess.push(guess);

    //last attempt
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } 
    //continue
    else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//--------------------------------------------------------------------------

//check the guess
function checkGuess(guess) {

  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } 
  else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } 
  else if (guess > randomNumber) {
    displayMessage(`Number is too High`);
  }

}

//----------------------------------------------------------------

//Display the Guess (cleanup)
function displayGuess(guess) {

  //update the user value with empty value
  userInput.value = '';

  //prev guesses
  guessSlot.innerHTML += `${guess}, `;

  numGuess++;
  remaining.innerHTML = `${10 - numGuess} `;

}

//------------------------------------------------------------------------- 

//Display the message
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

//------------------------------------------------------------------------


function endGame() {

  //clean up the user value
  userInput.value = '';
  userInput.setAttribute('disabled', '');

  //behave like button
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;

  startOver.appendChild(p);

  playGame = false;
  newGame();

}

//------------------------------------------------------------------------


function newGame() {

  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function (e) {

    //reset variables
    
    randomNumber = parseInt(Math.random() * 100 + 1);

    prevGuess = [];
    numGuess = 1;

    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess} `;

    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;

  });
}

