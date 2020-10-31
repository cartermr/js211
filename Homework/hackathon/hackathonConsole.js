// code to give the ability for user to input text
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//let inputString = 'The quick brown fox jumps over the lazy dog and the sleeping cat early in the day. They're "helper"'

// setup global variables for program
let processedText = {}
let textStats = {
    letterCounts: {},
    letterStats: {},
    wordCount: 0,
    wordStats: {}
}

// function to divide up the text into an array of the letters and an array of the words
const processText = (text) => {
    text = text.trim().toLowerCase()
    // split the text to individual elements and then filter out only those that are letters
    let lettersArray = [...text].filter(element => /[a-zA-Z]/g.test(element))
    // split the text into wors and then remove punctuation from the words
    let wordArray = text.replace(/["]|[.]/g, '').split(/\s/g)
    // return the two arrays
    return {lettersArray, wordArray}
}

// function to count the number of times each letter appears in the text
const countLetters = (array) => {
    let letterCounts = {}
    // loop though each letter, using unicode value, code 97 starts at A
    for (let i = 97; i < 124; i++) {
        let count = 0
        array.forEach( (element) => {
            // compare the current letter to each element and increase count by 1 if true
            if (element.charCodeAt(0) == i) {
                count = count + 1
                // create an object of the letters and thier counts
                letterCounts[String.fromCharCode(i)] = count
            }
        })
    }
    return letterCounts
}

// function to count the number of times each word appears in the text
const sameWords = (array) => {
    let words = {}
    // loop through array once for each word
    for (let i = 0; i < array.length; i++) {
        let count = 0
        //let test = array[i]
        array.forEach( (element) => {
            if (element == array[i]) {
                count = count + 1
                words[array[i]] = count
            }
        })
    }
    return words
}

const run = (inputString) => {
    processedText = processText(inputString)
    textStats.letterCounts = processedText.lettersArray.length
    textStats.letterStats = countLetters(processedText.lettersArray)
    textStats.wordCount = processedText.wordArray.length
    textStats.wordStats = sameWords(processedText.wordArray)
    console.log(processedText)
    console.log(textStats)
}

// create the displayed prompt and pass in the text entered by user to be processed
const getPrompt = () => {
    rl.question('Enter Text: ', (inputString) => {
      run(inputString)
      process.exit(0)
    });
  }

getPrompt()