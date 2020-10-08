'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  return stacks[endStack].push(stacks[startStack].pop());
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // Get the piece from the start stack
  let startValue = stacks[startStack][stacks[startStack].length - 1];
  // Get the piece from the end stack
  let endValue = stacks[endStack][stacks[endStack].length - 1];
  
  // Conpare the two pieces and return false is start is larger than end, true otherwise
  if (startValue > endValue) {
    return false;
  } else {
    return true;
  };
};

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Initial piece to check for is the largest
  let value = 4;
  // Initial win state is false
  let win = false;

  // Loop through the arrays of stacks b and c
  for (let i = 0; i < 4; i++) {
    // Check if the piece at array[i] = value
    if (stacks['b'][i] == value || stacks['c'][i] == value) {
      // Decrease value to the next smaller piece
      value -= 1;
      // Set win state to true if the piece at array[i] keeps = to value
      win = true;
    } else {
      // Set win state to false if the piece at array[i] != value
      win = false;
      // break out of the loop win the win state is set to fale
      break;
    };
  };

  // Return true or false on winniing
  return win;
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Check that selected move was legal
  if (isLegal(startStack, endStack)) {
    // If isLegal returned true, then move the piece
    movePiece(startStack, endStack);
  };

  // Check if the game was won on the last move
  if (checkForWin()) {
    // Display a winning message
    console.log('************************************');
    console.log('Congrats! You won Towers of Hanoi!');
    printStacks();
    console.log('************************************');
    // Start new game and reset board
    console.log('\nNew Game\n');
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  };
};


const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests
// Run test functions if run through npm test
if (typeof describe == 'function') {

  // Check that player can actually move a piece on the board
  describe('Is the game playable', () => {
    it('Player should be able to move a piece on the stacks', () => {
      // Play a round of game
      towersOfHanoi('a', 'b');
      // Check that the piece moved on the board
      assert.deepStrictEqual(stacks, {a: [4, 3, 2], b: [1], c: []});
    });
  });

  // Check the legality of the move by the player
  describe('Did the player make a legal move', () => {
    it('Will not allow an illegal move', () => {
      // Set the game board
      stacks = {a: [4, 3, 2], b: [1], c: []};
      // Make an illegal moved, 2 on top of 1
      assert.ok(!isLegal('a', 'b'));
    });
    it('Will allow a legal move', () => {
      // Set the game board
      stacks = {a: [4, 3, 2, 1], b: [], c: []};
      // Make a legal move, 1 to an empty stack
      assert.ok(isLegal('a', 'c'));
    });
  });

  // Check for a winning game
  describe('Check if the player won the game', () => {
    it('Check for winning game', () => {
      // Set stacks as a winning game
      stacks = {a: [], b: [4, 3, 2, 1], c: []};
      // Check that checkForWin return true
      assert.ok(checkForWin());
    });
    it('Determine the player has not won the game yet', () => {
      // Set stacks as a non-winning game
      stacks = {a: [4, 3], b: [1], c: [2]};
      // Check that checkForWin returns false
      assert.ok(!checkForWin());
    });
  });
} else {
  // Start game if run through node
  getPrompt();
};