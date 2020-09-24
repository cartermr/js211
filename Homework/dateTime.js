// *******************************
//          PART ONE
// *******************************

// Funtion to display current day and time
const displayDate = () => {
    let currentDate = new Date()
    return currentDate
}

console.log(displayDate())

// Function to convert a number to a string
let numToConvert = 15

const convertNumString = (origNum) => {
    let convertNum = origNum.toString()
    return convertNum
}

let convertedNum = convertNumString(numToConvert)

console.log(convertedNum, " which is typeof: ", typeof convertedNum)

// Function convert string to number
let strToConvert = "30"

const convertStringNum = (origStr) => {
    let convertStr = Number(origStr)
    return convertStr
}

let convertedString = convertStringNum(strToConvert)

console.log(convertedString, " which is typeof: ", typeof convertedString)

// Function to the datatype of a variable
let data = true

const displayDatatype = (data) => {
    return typeof data
}

console.log(data, " is a: ", displayDatatype(data))

// Function to add two numbers together
let num1 = 10
let num2 = 30

const addTwoNumbers = (num1, num2) => {
    return num1 + num2
}

console.log(addTwoNumbers(num1, num2))

// Function that only runs when two things are true
let bool1 = true
let bool2 = true

const runTwoTrue = (a, b) => {
    if (a == true && b == true) {
        return "Both items were True!!"
    }
}

console.log(runTwoTrue(bool1, bool2))

// Funtion run is one of two are true
bool1 = false

const runOneTrue = (a, b) => {
    if (a == true || b == true) {
        return "At least one item or both is True!!"
    }
}

console.log(runOneTrue(bool1, bool2))

// Function run with both items are false
bool2 = false

const runBothFalse = (a, b) => {
    
}