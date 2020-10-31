let inputText = ''
let processedText = {}
let textStats = {
    letterCounts: {},
    letterStats: {},
    wordCount: 0,
    wordStats: {}
}

const processText = (text) => {
    text = text.trim().toLowerCase()
    let lettersArray = [...text].filter(element => /[a-zA-Z]/g.test(element))
    let wordArray = text.replace(/["]|[.]|[,]/g, '').split(/\s/g)
    wordArray = wordArray.filter(element => /[a-zA-Z']+/g.test(element))
    return {lettersArray, wordArray}
}

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

const process = (inputString) => {
    processedText = processText(inputString)
    textStats.letterCounts = processedText.lettersArray.length
    textStats.letterStats = countLetters(processedText.lettersArray)
    textStats.wordCount = processedText.wordArray.length
    textStats.wordStats = sameWords(processedText.wordArray)
}

const displayProcessedStats = () => {
    document.getElementById('totalWords').innerText += " " + textStats.wordCount
    document.getElementById('totalLetters').innerText += " " + textStats.letterCounts

    let wordUsage = document.getElementById('wordUsage')
    for (const [key, value] of Object.entries(textStats.wordStats)) {
        let li = document.createElement('li')
        li.innerText = `${key}: ${value}`
        wordUsage.appendChild(li)
    }

    let letterUsage = document.getElementById('letterUsage')
    for (const [key, value] of Object.entries(textStats.letterStats)) {
        let li = document.createElement('li')
        li.innerText = `${key}: ${value}`
        letterUsage.appendChild(li)
    }
}

let processButton = document.getElementById('process')

processButton.addEventListener('click', function () {
    inputText = document.getElementById('textInput').value
    process(inputText)
    displayProcessedStats()
    console.log(processedText)
    console.log(textStats)
})
