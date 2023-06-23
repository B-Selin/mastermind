
# Mastermind




This is a JavaScript implementation of the Mastermind code-breaking game.


<img src="assets/Beginning Screen.png"
     alt="Home Screen"
     style="width:40%; height:20%; margin-right: 10px; align: center" />



## Technologies

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![VsCode](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
<img src = "https://storage.googleapis.com/sourcegraph-assets/cody/20230417/logomark-default-text-black.png" width=10% height=10%>


## How to Play
* The computer generates a random 4-digit secret code using numbers 0-9. No digits are repeated.
* The player enters guesses to try and crack the secret code. For each guess, the player clicks on 4 numbers between 0 and 9.
* After each guess, the computer provides feedback:

Purple diamonds indicate digits that are correct and in the correct position.
Magenta diamonds indicate digits that are in the secret code but in the wrong position.
The player has 6 guesses to crack the secret code. If the code is cracked, a "You win!" message is displayed. If the player runs out of guesses, the secret code is revealed.

<img src="assets/Game screen.png"
     alt="How to play"
     style="width:40%; height:20%; margin-right: 10px; align: center" />


The player can click "Start Over" to generate a new secret code and play again.

## Rules
* The secret code contains 4 unique digits between 0 and 9.
* Guesses must also contain 4 digits between 0 and 9.
* The same digit cannot appear more than once in a guess.
* Feedback is provided after each guess using green and yellow circles.
* The player has 6 guesses to crack the code before losing.

## Live Link

Game can be played in here
[Mastermind by Selin](https://b-selin.github.io/mastermind)

## Code Overview

The code defines:

Constants for the number of guesses, secret code length, and possible digits
State variables to track the secret code, guesses, feedback, etc.
Cached DOM elements
Event listeners for handling guesses and restarting the game
Functions to generate the secret code, provide feedback, check for a win, etc.
The game logic and UI are separated into the main.js file and the HTML/CSS files.

Have fun and good luck cracking the code! Let me know if you have any questions.  


## Future Improvements

- Show a 'hint' after 3 incorrect guesses
- Allow the player to customize the number of guesses
- Include an 'expert mode' with longer secret codes


### Contact Me
For any questions or suggestions, feel free to reach out via:
- LinkedIn : [Selin LeBlanc](https://www.linkedin.com/in/selin-leblanc/)
