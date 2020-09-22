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