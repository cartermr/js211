'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const vowels = ['a', 'e', 'i', 'o', 'u']

const pigLatin = (word) => {
  // Set word to lowercase and trim
  word = word.toLowerCase()
  word = word.trim()

  // Does the word start with a vowel
  for (const vowel of vowels) {
    if (word[0] == vowel) {
      // If the word starts with a vowel send to translation
      return startVowl(word)
    }
  }

  // Send word for translation
  return translateWord(word)
}

// Translation function for words that start with a vowel
const startVowl = (word) => {
  // Trasnlate the word into Pig Latin
  return word + "yay"
}

// Translation function for words that start with a consonant
const translateWord = (word) => {
  let stop = false
  let indexOf

  // Loop through each letter in word
  for (let i = 0; i < word.length; i++) {
    // Check each letter to see if it's a vowel
    for (const vowel of vowels) {
      // If the letter is a vowel, return the index and break from the loop
      if (word[i] == vowel) {
        indexOf = i
        stop = true
        break
      }
    }
    // Break from the full loop when the first vowel is found
    if (stop == true) {
      break
    }
  }

  // Trasnlate the word into Pig Latin
  let str1 = word.slice(0, indexOf)
  let str2 = word.slice(indexOf,)
  let newWord = str2 + str1 + "ay"

  return newWord
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.