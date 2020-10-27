const myString = "This is for your own personal journey as a developer.\nMay you have excellent navigation as a developer using your own compass."

const findLongestWord = (str) => {
    let strArray = str.split(' ');
    let longest = strArray[0]
    for (let i = 1; i < strArray.length; i++) {
        if (strArray[i].length > longest.length) {
            longest = strArray[i]
        }
    }
    return longest
}

console.log(findLongestWord(myString))