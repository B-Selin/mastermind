/*----- constants -----*/
const maxGuess = 5;
const secretCodeLength = 4;
const allGuesses = ['0','1','2','3','4','5','6','7','8','9'];

/*----- state variables -----*/
let board;
let numGuesses; // every 4 digit number that player enters is counts as 1 guess - goes from 0 to maxGuess - represents rows
let secretCode=[];
let matchesInPlace;
let matchesNotInPlace;
let playerGuess; //
let guessCount; // every selection/click player does within their 4 digit guess - goes from 0 to 3 - represents columns
let continuePlaying;
let winner;
let usedNumbers;

/*----- cached elements  -----*/
// let codeEl; //I dont remember what I was thinking when I wrote this.
const guessEl = document.querySelector('.numbers');

const infoEl = document.querySelector('.information');
const playAgainBtn = document.querySelector('.button');
let resultEl; // Not sure if I will need this

/*----- event listeners -----*/
//An event listener for play again button to restart the game with init() function
playAgainBtn.addEventListener('click', init); //provide the function, do not invoke the function

//Add event listener to get player guess
guessEl.addEventListener('click', handleGuess);
console.log()


/*----- functions -----*/
init();//invoke init function to start the game

//I try to not hardcode stuff, but the board -hence the number of max guesses- is hardcoded here. I will deal with this later if I'm done early.
// OR, can I create the board like this : board [ [] * maxGuess + 1 ]? 
function init(){
  board = [ [] , [] , [] , [], [], []];
  winner = false;
  numGuesses = 0;
  matchesInPlace = 0;
  matchesNotInPlace = 0;
  guessCount = 0;
  continuePlaying = true;
  usedNumbers = [];
  generateSecretCode();
  render();
}

function handleGuess(event){
  //Get player guess from the clicked elemnt
  playerGuess = event.target.innerText;
  if (!usedNumbers.includes(playerGuess)){
    //push it in the array
    usedNumbers.push(playerGuess);
    //increase the guessCount
    render();

    guessCount +=1;
    // when guess count is 3 or usedNumber.length reaches secretCodeLength, reset the guessCount and increase numGuesses
    if(usedNumbers.length === secretCodeLength){
      guessCount = 0;
      numGuesses++;
      usedNumbers = [];
      checkPlayerGuess();    
    }

  }

}


function generateSecretCode(){
  // secret code is initially equals to an empty array
  //I did not hardcode length of the secret code & possible guesses, but now I realise it is hardcoded in the constants. 
  for (let i = 0; i <= secretCodeLength; i++) { 
    // generate a random number from 0 - 9
    let randomIdx = Math.floor(Math.random() * allGuesses.length);
    //Push four random numbers to the empty array, if that number is not already in the secretcode
    if(!secretCode.includes(randomIdx)){
      secretCode.push(randomIdx);
    }
  }
}

function checkPlayerGuess(){
  //Check if the player guess is in the secret code, if yes, increase the matchesNotInPlace count
  //then check if the exact secretcode[i] matches the usedNumbers[i] increase matchesInPlace count and decrease the matchesNotInPlace respectively
  for (let i = 0; i < secretCode.length; i++) {
    if(usedNumbers.includes(secretCode[i])){
     matchesNotInPlace++;
    }
  }
  for(let i = 0; i < secretCode.length; i++){
    if(secretCode[i] === usedNumbers[i]){
      matchesInPlace++;
      matchesNotInPlace--;        
    }
  }
  //Check if player has won 
   if (matchesInPlace === secretCodeLength){
     winner = true;  
     //switch button text from 'start over' to 'play again'
     playAgainBtn.innerText = 'Play Again';               
   }
  //Check if player has ran out of guesses   
   if (numGuesses === maxGuess){
      continuePlaying = false;
   }
}

function getWinner(){
  // If number of guesses reaches maxGuesses or player has no more guesses, player loses
  // if matchesInPlace = length of the secret code, player has won
  if (matchesInPlace === secretCodeLength){
    winner = true;
    //switch button text from 'start over' to 'play again'

  }
}
function render(){
  renderBoard();
  // renderInformation();
  //renderDiamonds();

}

function renderBoard(){
  // define a guessIdx element and assign it to the last played numGuesses and guessCount
  if(playerGuess){
    let guessIdx = `guess${numGuesses}${guessCount}`;
    console.log(playerGuess);
    console.log(guessIdx);
    // get the element with the id of guessIdx from the html and assign its innerText to playerGuess
    document.getElementById(guessIdx).innerText = playerGuess;
  }
};

// function renderInformation(){
//   //if winner than return you cracked the code!!
//   if(winner) infoEl.innerText = "You Cracked the Code!";    

//   // if continuePlaying is false, player ran out of guesses
//   else if(!continuePlaying) infoEl.innerText = 'You Ran Out Of Guesses';

//   //change the information on the board to match the outcome of matchesInPlace and MatchesNotInPlace. your code has "matchesInthePlace" correct digits in the right place and "matchesNotinPlace" correct digits in the wrong place
//   infoEl.innerText = `${matchesInPlace} Correct! ${matchesNotInPlace} Almost There.`;
  
// }

function playAgain(){
  init(); 
};

