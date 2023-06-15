# mastermind
Mastermind game 

Generate a random 4-digit secret code between 1000 and 9999 with no repeating digits.

Prompt the player to enter a 4-digit guess.

Compare the player's guess to the secret code.

For each digit that is in the correct position, give a "green circle".
For each digit that is in the secret code but in the wrong position, give a "yellow circle".
Do not count digits that are not in the secret code.
Provide feedback to the player on the outcome. For example, "2 number is correct and in the correct spot, 1 number is correct and in the wrong spot".

If the guess matches the secret code, print "You cracked the code!" and end the game.

If the player has guessed incorrectly 6 times, print "You ran out of guesses. The secret code was [secret code]". End the game.

Otherwise, wait for player to enter another guess and repeat steps 3 through 6.
//Try adding a check to make sure player entered 4 digits - does not have to be different digits.

Once the game has ended, prompt the player if they want to play again.

If yes, generate a new random secret code with no repeating digits and start over at step 2.
If no, end the program.
To generate the random secret code:
  -Start with a blank code: 
  -For each digit, generate a random number between 1 and 9 that is not already in the code.


Generate the secret code
def generate_secret_code():
code = ''
used = []
for i in range(4):
# Generate random number between 1 and 9
num = random.randint(1,9)
# Keep generating until we find a unique number
while num in used:
num = random.randint(1,9)
# Add number and mark as used
code += str(num)
used.append(num)
return code

Prompt the player and get their guess
def get_player_guess():
return input("Enter your 4 digit guess: ") // Maybe

Check if player enetered a 4 digit number

Compare the guess to the secret code and count matches
def compare_and_count(guess, code):
green = 0
yellow = 0
# Loop through each digit
for i in range(4):
digit = str(guess[i])
# Check for correct digit and position
if digit == code[i]:
green += 1
# Check for correct digit in wrong position
elif digit in code:
yellow += 1
return green, yellow

Provide feedback depending on the current count of green and yellow
def provide_feedback(green, yellow):
print({green} number is correct and in the correct spot, {yellow} number is correct and in the wrong spot")

run if there is a winner
def check_winner(guess, code):
if player used all its guesses
if guess attempts == MAX_GUESSES:
print('You ran out of guesses. The secret code was', code)


if guess == code:
print("You cracked the code!")
return True and change start over button into play again button

Possible constants and functions in the game

/Define constants
MAX_GUESSES = 6
WINNING_CODE_LENGTH = 4
GUESS_LIST = [1....9]

/Define functions
function generate_secret_code():
function get_player_guess():
function compare_and_count(guess, code): // might be twoo different functions
function provide_feedback(green, yellow):
function check_winner(guess, code):
function play_again():
function initiate():

/Define state /global variables
guesses = 0
secret_code = generate_secret_code()
keep_playing = True
winner = False

/Define cached elements 
def codeEl = document.getElementById('')
def guessEl = 
def buttonEl = 