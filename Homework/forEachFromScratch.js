/**
 * .forEach() function written from scratch
 */

// Create an array to process
let people = ['matt', 'john', 'mark', 'james']

// forEach function, takes an array and a function as parameters
let scratchForEach = function (array, func) {
    // For loop to go through elements of passed in array
    for (let i = 0; i < array.length; i++) {
        // Get the individual element from the passed in array
        let element = array[i]
        // Pass the element into the passed in function
        func(element, i)
    }
}

// Test the forEach() from scratch
console.log('scratchForEach() used on people array' + '\n' + '***************************')

scratchForEach(people, function (element) {
    console.log(element)
})