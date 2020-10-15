// create array of numbers to work with
let numbers = [1, 2, 3, 4]

console.log('Numbers array - >', numbers + '\n')

// find() funtion from scratch, takes in an array and function as parameters
let scratchFind = function (array, func) {
    // Loop through each element of the passed in array
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        // If the passed in function returns true based on the element, return that element
        if (func(element, i)) {
            return element
        }
        // Else the function will return as undefined
    }    
}

// Test the new find() from scratch function
let found = scratchFind(numbers, element => element > 2)

// Expected output is 3
console.log('scratchFind() ->', found)


console.log()

// findIndex() funtion from scratch, takes in an array and function as parameters
let scratchFindIndex = function (array, func) {
    // Loop through each element of the passed in array
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        // If the passed in function returns true based on the element, return that index of the passed in array
        if (func(element, i)) {
            return i
        }
        // Else the function will return as undefined
    }    
}

// Test the new find() from scratch function
let found2 = scratchFindIndex(numbers, element => element > 2)

// Expected output is 2
console.log('scratchFindIndex() ->', found2)