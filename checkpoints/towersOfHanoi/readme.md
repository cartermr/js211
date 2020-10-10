# Towers of Hanoi Code Plan

## Unit Testing
- Write out a series of unit tests for the game.
  - Test playability of game, can a piece be moved, the legality of the move.
  - Test if the code will detect a winner.
  
## Game Code
1. The function towersOfHanoi() will be used to control the flow of the game after the user inputs his move.
  - The function will take two parameters, the stack the piece is taken from, the stack the piece is moved to.
  - The function will call other various functions to check if the move was legal, make the piece move, and check if the game was won.

2. The first function called inside of towersOfHanoi() will be, isLegal().
  - Takes the same parameters passed into towersOfHanoi().
  - Will see if the piece moved is bigger or smaller than the piece it is moved on top of, checking if the move is legal.

3. The second function called will be, movePiece().
  - Will take the same parameters passed into towersOfHanoi().
  - Function will then move the piece between the two chosen stacks.

4. An IF statement will call checkForWin() function inside towersOfHanoi().
  - checkForWin() will check the current state of the board to see if the game was won.
  - If checkForWin() returns true, then a winning statement will be displayed to the player, and the game board will be reset to start a new game.