/*----- constants -----*/
const maxGuess = 5;
const secretCodeLength = 4;
const allGuesses = ['0','1','2','3','4','5','6','7','8','9'];

/*----- state variables -----*/
let board;
let numGuesses;
let secretCode;
let matchesInPlace;
let matchesNotInPlace;
let playerGuess;
let continuePlaying;
let winner;
let usedNumbers;

/*----- cached elements  -----*/
let codeEl;
let guessEl;
let guessCountEl;
const infoEl = document.querySelector('info');
const playAgainBtn = document.querySelector('button');
let resultEl; // Not sure if I will need this


/*----- event listeners -----*/
//An event listener for play again button to restart the game with init() function
playAgainBtn.addEventListener('click', init); //provide the function, do not invoke the function

//An event listener to get player guess
guessEl.addEventListener('click', handleDrop)

/*----- functions -----*/
init();//invoke init function to start the game

function init(){
  board = [
    [],
    [],
    [],
    [],
    [],
    []
  ];
  winner = false;
  numGuesses = 0;
  matchesInPlace = 0;
  matchesNotInPlace = 0;
  continuePlaying = true;
  usedNumbers = [];
  render();
}



function generateSecretCode(){
  // secret code is initially equals to an empty array
  secretCode = [];

  //I dod not hardcoded length of the secret code & possible guesses
  for (let i = 0; i < secretCodeLength; i++) { 
    // generate a random number from 0 - 9
    let randomIdx = Math.floor(Math.random() * allGuesses.length);
    //Push four random numbers to the empty array
    secretCode.push(allGuesses[randomIdx]);
  }

}

function getPlayerGuess(){

}

function checkPlayerGuess(){

}

function getWinner(){
  // If number of guesses reaches maxGuesses or player has no more guesses, player loses
  // if matchesInPlace = length of the secret code, player has won
  if (matchesInPlace === secretCodeLength){
    winner = true;
  }
}
function render(){
  //render board
  //render information
  //render diamonds - this is optional at this point

}
function playAgain(){

}

