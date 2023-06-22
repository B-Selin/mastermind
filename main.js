/*----- constants -----*/
const maxGuess = 5;
const secretCodeLength = 4;
const allGuesses = ['0','1','2','3','4','5','6','7','8','9'];

/*----- state variables -----*/

let numGuesses; // every 4 digit number that player enters is counts as 1 guess - goes from 0 to maxGuess - represents rows
let secretCode=[]; 
let matchesInPlace = 0; //digits that are right and in the right place
let matchesNotInPlace = 0; //digits that are right but not in the right place
let playerGuess; // one digit number that player clicks on
let guessCount; // every selection/click player does within their 4 digit guess - goes from 0 to 3 - represents columns
let continuePlaying;
let winner;
let usedNumbers; //empty array to keep track of playerGuess, to prevent selecting same number

/*----- cached elements  -----*/

const guessEl = document.querySelector('.numbers');
const infoEl = document.querySelector('.information');
const playAgainBtn = document.querySelector('.button');
const allCircles = document.querySelectorAll('.circle');
const allDiamonds = document.querySelectorAll('.diamond');

/*----- event listeners -----*/
//An event listener for play again button to restart the game with init() function
playAgainBtn.addEventListener('click', init); //provide the function, do not invoke the function

//Add event listener to get player guess
guessEl.addEventListener('click', handleGuess);

/*----- functions -----*/
init();//invoke init function to start the game

//I try to not hardcode stuff, but the board -hence the number of max guesses- is hardcoded here. I will deal with this later if I'm done early.
// OR, can I create the board like this : board [ [] * maxGuess + 1 ]? 
function init(){
  // Reset all state variables to their initial value.

  // remove the html data from circles
  allCircles.forEach(circle => circle.innerHTML = '');
  //remove the color from the diamond class
  allDiamonds.forEach(diamond => diamond.style.borderBottomColor = '#f0f0f0');

  infoEl.innerHTML = 'CANDY MACHINE IS BROKEN!! CAN YOU GUESS THE SECRET CODE TO TURN IT OFF AND ON AGAIN?'
  winner = false;
  secretCode = [];
  numGuesses = 0;
  playerGuess = '';
  guessCount = 0;
  continuePlaying = true;
  usedNumbers = [];
  generateSecretCode();
  renderBoard();
  renderInformation();
}

function handleGuess(event){
  //Get player guess from the clicked elemnt
  playerGuess = event.target.innerText;
  
  if (!usedNumbers.includes(parseInt(playerGuess)) && playerGuess.length === 1){
    //push it in the array
    //had to push as integer, otherwise checkPlayerGuess function does not work comparing an int and str
    usedNumbers.push(parseInt(playerGuess));
    //increase the guessCount
    renderBoard();
    guessCount +=1;
    // when guess count is 3 or usedNumber.length reaches secretCodeLength, reset the guessCount and increase numGuesses
    if(usedNumbers.length === secretCodeLength){
      checkPlayerGuess();
      guessCount = 0;
      numGuesses++;
      usedNumbers = [];
    }
  }
}


function generateSecretCode(){

  /* now, if the random number is already in the secretCode, the i does increase but the secret number does not, 
  so the for loop runs maybe 4 times but I may end up with 2 or 3 digit code. 
  I will try decrease i, 
  because I think i incrementation happens before anyother stuff happening inside the for loop*/

  // secret code is initially equals to an empty array
  //I did not hardcode length of the secret code & possible guesses, but now I realise it is hardcoded in the constants. 

  for (let i = 0; i < secretCodeLength; i++) { 
    // generate a random number from 0 - 9
    let randomIdx = Math.floor(Math.random() * allGuesses.length);
    //Push four random numbers to the empty array, if that number is not already in the secretcode

    if(!secretCode.includes(randomIdx)){
      secretCode.push(randomIdx);
    } else {
      i--;
    }
    console.log(secretCode)
  }
}

function checkPlayerGuess(){
  /*Check if the player guess is in the secret code, if yes, increase the matchesNotInPlace count
  then check if the exact secretcode[i] matches the usedNumbers[i] increase matchesInPlace count and 
  decrease the matchesNotInPlace respectively*/
  matchesNotInPlace = 0;
  matchesInPlace = 0;
  for (let i = 0; i < secretCode.length; i++) {
    // console.log(usedNumbers, secretCode)
    if(secretCode.includes(usedNumbers[i])){
      matchesNotInPlace++;
    }
    if(usedNumbers[i] === secretCode[i]){
      matchesInPlace++;
      matchesNotInPlace--;
    }
  }

  // console.log(matchesNotInPlace, matchesInPlace);
  
  //Check if player has won 
  if (matchesInPlace === secretCodeLength){
     winner = true;  
     //switch button text from 'start over' to 'play again'
     playAgainBtn.innerText = 'Play Again?';               
  }
  //Check if player has ran out of guesses   
  if (numGuesses === maxGuess){
      continuePlaying = false;
  }
  renderInformation() //honestly I couldnt find a way to change the info board
  renderDiamonds() // smae reason lol
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
  renderInformation();
  renderDiamonds();
}

function renderBoard(){
  // define a guessIdx element and assign it to the last played numGuesses and guessCount
  if(playerGuess){
    let guessIdx = `guess${numGuesses}${guessCount}`;
    // console.log(playerGuess);
    // console.log(guessIdx);
    // get the element with the id of guessIdx from the html and assign its innerText to playerGuess
    document.getElementById(guessIdx).innerText = playerGuess;
  }
};

function renderInformation(){
  if (usedNumbers.length === secretCodeLength) {
    //change the information on the board to match the outcome of matchesInPlace and MatchesNotInPlace. your code has "matchesInthePlace" correct digits in the right place and "matchesNotinPlace" correct digits in the wrong place.

    infoEl.innerHTML = `${matchesInPlace} digits are at home! ${matchesNotInPlace} digits are on their way!!`;
    // console.log(matchesInPlace, matchesNotInPlace)
  }
  //if winner than return you cracked the code!!
  if(winner) infoEl.innerText = 'You Cracked the Code!';    

  // if continuePlaying is false, player ran out of guesses
  else if(!continuePlaying) {
    infoEl.innerText = `YOU RAN OUT OF GUESSES!! Secret Code Was ${secretCode}`;
    playAgainBtn.innerText = 'Play Again?';
  };
}

function renderDiamonds() {
  //according to the number of matchesInPlace and matchesNotInPlace, color of the class diamond elements should change
  // console.log(matchesInPlace, matchesNotInPlace)

  for (let i=0; i<matchesInPlace; i++) {
    document.getElementById(`c${i}r${numGuesses}`).style.borderBottomColor = 'purple';


  }
  for (let j=matchesInPlace; j<(matchesNotInPlace+matchesInPlace); j++) {
    document.getElementById(`c${j}r${numGuesses}`).style.borderBottomColor = 'magenta';
  }
}
