// **********************************************
//          Date and Time Assignment
// **********************************************

// Funtion to display current day and time
const displayDate = () => {
    let currentDate = new Date()
    return currentDate
}

console.log("1. Function to display the Date and Time:", displayDate())

// Function to convert a number to a string
let a = 15

const numToString = (num) => {
    let str = num.toString()
    return str
}

let b = numToString(a)

console.log("2. Function convert number", a, "to string:", b)


// Function convert string to number
let c = "53"

const stringToNumber = (str) => {
    let num = Number(str)
    return num
}

let d = stringToNumber(c)

console.log("3. Function convert string", c, "to number:", c)

// Function to the datatype of a variable
let data = true

const returnDataType = (data) => {
    return typeof data
}

let type = returnDataType(data)

console.log("4. Funtion to return data type of variable,", data, ":", type)

// Function to add two numbers together
let num1 = 10
let num2 = 30

const add = (num1, num2) => {
    return num1 + num2
}

let num3 = add(num1, num2)

console.log("5. Function to add two number:", num1, "+", num2, "=", num3)

// Function that only runs when two things are true
let bool1 = true
let bool2 = true

const twoTrue = (a, b) => {
    if (a == true && b == true) {
        console.log("6. Function only runs if two items are True!")
    }
}

twoTrue(bool1, bool2)

// Funtion run is one of two are true
bool1 = false

const oneTrue = (a, b) => {
    if (a == true || b == true) {
        console.log("7. Function only runs if one item is True!")
    }
}

oneTrue(bool1, bool2)

// Function run with both items are false
bool2 = false

const allFalse = (a, b) => {
    if (a == false && b == false) {
        console.log("8. Function only runs it two items are False!")
    }
}

allFalse(bool2, bool1)