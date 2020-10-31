// setup global variables
let inputText = ''
let processedText = {}
let textStats = {
    letterCounts: {},
    letterStats: {},
    wordCount: 0,
    wordStats: {}
}

// function to extra the text into an array of the letters and an array of the words
const processText = (text) => {
    text = text.trim().toLowerCase()
    // extract each item in the string to an array, then filter out only the letters
    let lettersArray = [...text].filter(element => /[a-zA-Z]/g.test(element))
    // replace any quotes, periods, or cammas with an empty string space, thin split each word by space into an array
    let wordArray = text.replace(/["]|[.]|[,]/g, '').split(/\s/g)
    // filter out only the words, getting rid of any empty string elements in the arrau
    wordArray = wordArray.filter(element => /[a-zA-Z']+/g.test(element))
    return {lettersArray, wordArray}
}

// funtion to count the letters in the array, creats an object with each letter in the text and the count for that letter
const countLetters = (array) => {
    let letterCounts = {}
    for (let i = 97; i < 124; i++) {
        let count = 0
        array.forEach( (element) => {
            if (element.charCodeAt(0) == i) {
                count = count + 1
                letterCounts[String.fromCharCode(i)] = count
            }
        })
    }
    return letterCounts
}

// funtion to count the words in the array, creats an object with each word in the text and the count for that word
const sameWords = (array) => {
    let words = {}
    for (let i = 0; i < array.length; i++) {
        let count = 0
        array.forEach( (element) => {
            if (element == array[i]) {
                count = count + 1
                words[array[i]] = count
            }
        })
    }
    return words
}

// main function to process the string provided
const process = (inputString) => {
    processedText = processText(inputString)
    textStats.letterCounts = processedText.lettersArray.length
    textStats.letterStats = countLetters(processedText.lettersArray)
    textStats.wordCount = processedText.wordArray.length
    textStats.wordStats = sameWords(processedText.wordArray)
}

// function to display the stats extracted from the text
const displayProcessedStats = () => {
    // total number of words
    document.getElementById('totalWords').innerText += " " + textStats.wordCount
    // total number of letters
    document.getElementById('totalLetters').innerText += " " + textStats.letterCounts

    // loop to add each word and its individual count to the html page
    let wordUsage = document.getElementById('wordUsage')
    for (const [key, value] of Object.entries(textStats.wordStats)) {
        let li = document.createElement('li')
        li.innerText = `${key}: ${value}`
        wordUsage.appendChild(li)
    }

    // loop to add each letter and its individual count to the html page
    let letterUsage = document.getElementById('letterUsage')
    for (const [key, value] of Object.entries(textStats.letterStats)) {
        let li = document.createElement('li')
        li.innerText = `${key}: ${value}`
        letterUsage.appendChild(li)
    }
}

// retrieve the button from the html page
let processButton = document.getElementById('process')

// make the button clickable, process the text entered by the user, then display the text stats
processButton.addEventListener('click', function () {
    inputText = document.getElementById('textInput').value
    process(inputText)
    displayProcessedStats()
    console.log(processedText)
    console.log(textStats)
})
