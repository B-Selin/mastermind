# mastermind
Mastermind game 

This is a JavaScript implementation of the Mastermind code-breaking game.


##How to Play
*The computer generates a random 4-digit secret code using numbers 0-9. No digits are repeated.
*The player enters guesses to try and crack the secret code. For each guess, the player clicks on 4 numbers between 0 and 9.
*After each guess, the computer provides feedback:

Purple diamonds indicate digits that are correct and in the correct position.
Magenta diamonds indicate digits that are in the secret code but in the wrong position.
The player has 6 guesses to crack the secret code. If the code is cracked, a "You win!" message is displayed. If the player runs out of guesses, the secret code is revealed.

The player can click "Start Over" to generate a new secret code and play again.

##Rules
*The secret code contains 4 unique digits between 0 and 9.
*Guesses must also contain 4 digits between 0 and 9.
*The same digit cannot appear more than once in a guess.
*Feedback is provided after each guess using green and yellow circles.
*The player has 6 guesses to crack the code before losing.

##Live Link

Game can be played in here
https://b-selin.github.io/mastermind/

##Code Overview
The code defines:

Constants for the number of guesses, secret code length, and possible digits
State variables to track the secret code, guesses, feedback, etc.
Cached DOM elements
Event listeners for handling guesses and restarting the game
Functions to generate the secret code, provide feedback, check for a win, etc.
The game logic and UI are separated into the main.js file and the HTML/CSS files.

Have fun and good luck cracking the code! Let me know if you have any questions.  
