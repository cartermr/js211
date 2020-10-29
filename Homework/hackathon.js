let inputString = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."
console.log('Input String:', inputString)

inputString = inputString.toLowerCase()
let lettersArray = [...inputString].filter(element => /[a-zA-Z]/.test(element))
console.log(lettersArray)

let letterCounts = {}

for (let i = 97; i < 124; i++) {
    let count = 0
    lettersArray.forEach( (element) => {
        if (element.charCodeAt(0) == i) {
            count = count + 1
            letterCounts[String.fromCharCode(i)] = count
        }
    })
}

console.log(letterCounts)