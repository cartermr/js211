// Bring in assert library to use for testing
const assert = require('assert')

// Function to add two numbers, function tested
function add(num1, num2) {
    return num1 + num2
}

// Write 2 test suites
describe("should work for positive", function() {
    it("Should work for 4 and 5", function() {
        let expected = 9
        let actual = add(4,5)
        assert.equal(actual, expected)
    })

    it("Should work for 7 and 2", function() {
        let expected = 9
        let actual = add(7,2)
        assert.equal(actual, expected)
    })

    it("Should work for 3 and 2", function() {
        let expected = 5
        let actual = add(3,2)
        assert.equal(actual, expected)
    })
})