'use strict';

// Add needed modules for testing and user input
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Global game variables
let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// Print out the guesses and hints for the player
const printBoard = () =>  {
  console.log('Your Moves:', board);
}

// Generate a random solution for the game
const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution = solution + letters[randomIndex];
  }
}

// Random number generator used in the generation of the solution, gives random index number to use
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Takes in the guess from the player and generates a hint based on the guess
const generateHint = (guess) =>  {
  // The number of correct guesses in the correct positions
  let correctPosition = 0
  // The number of correct letters in the guess
  let correctLetters = 0
  // Split the guess and solution into arrays to iterate over the letters in each
  let guessArray = guess.split('')
  let solutionArray = solution.split('')

  // Loop to iterate over the solution and compare each latter at its position to the guess latters at same position
  for (let i = 0; i < solutionArray.length; i ++) {
    if (solutionArray[i] == guessArray[i]) {
      // Increase the correctPosition count if letters are same at same index
      correctPosition = correctPosition + 1
      // Clear out the guessed letter from the solution array, so not counted in the correct letters portion of hint
      solutionArray[i] = null
    }
  }

  // Loop over the solution again, now comparing if any letters in guess are in solution, but not at the same index
  for (let i = 0; i < solutionArray.length; i++) {
    // Check if a letter at given index of guess is anywhere in the solution array
    let targetIndex = solutionArray.indexOf(guessArray[i])
    // If the letter at guess index is in solution array, increase correct letter count by one and clear out the letter from the solution array
    if (targetIndex > -1) {
      correctLetters = correctLetters + 1
      solutionArray[targetIndex] = null
    }
  }

  // Generate the hint string to be given to the player
  let hint = correctPosition.toString() + '-' + correctLetters.toString()
  return hint
}

// Check if the guess by the player is correct and wins the game
const checkWin = (guess) => {
  if (guess == solution) {
    return true
  } else {
    return false
  }
}

// Main game logic, controls flow of game outside of player input
const mastermind = (guess) => {
  // solution = 'abcd'; // Comment this out to generate a random solution

  // If the player had 10 incorrect guesses, return message that out of turns and the solution
  if (board.length == 10) {
    return 'You ran out of turns! The solution was ' + solution
  } else {
    // Check for a win and return message if the won or to guess again
    if (checkWin(guess)) {
      return 'You guessed it!'
    } else {
      // Add current guess and hint to the board to be displayed for the player
      board.push(guess + ' - hint: ' + generateHint(guess))
      return 'Guess Again'
    }
  }
}

// Game loop: displays prompt, takes in player input, check status of game
const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {

    // Set the current status of the game
    let game = mastermind(guess);

    // Check game status
    switch (game) {
      // If out of turns, display message to user and end game
      case 'You ran out of turns! The solution was ' + solution:
        console.log('\n------------------------------------------------------')
        console.log(game)
        console.log('------------------------------------------------------')
        process.exit(0)
      // If correct guess, display message to user and end game
      case 'You guessed it!':
        console.log('\n---------------')
        console.log(game)
        console.log('---------------')
        process.exit(0)
      // If incorrect guess, still have turns, tell player to guess again, display the board, loop back into the game code
      case 'Guess Again':
        console.log()
        console.log(game)
        printBoard();
        console.log()
        // Calling getPrompt() inside of getPrompt() creates an infinite game loop that is broken out of by the switch statement above 
        getPrompt();
    }
  });
}

// Tests
if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {
  // Generate the solution at the start of the game
  generateSolution();
  // Start the game loop
  getPrompt();
}