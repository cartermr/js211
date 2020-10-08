# Towers of Hanoi Code Plan

## Unit Testing
- Write out a series of unit tests for the game.
  - Test playability of game, can a piece be moved, the legality of the move.
  - Test if the code will detect a winner.
  
## Game Code
- Need a function to control the flow of the game.
  - Function: towersOfHanoi()
  - Parameters: startStack, endStack - The move the player intends to make on the stacks.
  - Will call other functions to:check if the move selected is legal, Move the piece, then check if the move won the game.
