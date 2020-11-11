const lodash = require('lodash')
const assert = require('assert')

let arr = ['a', 'b', 'c', 'd', 'e', 'f']

let chunked = lodash.chunk([...arr], 3)
let reversed = lodash.reverse([...arr])
let without = lodash.without([...arr], 'a', 'b')
let shuffled = lodash.shuffle([...arr])
let initial = lodash.initial([...arr])

console.log('original array:', arr)
console.log('lodash chunk:', chunked)
console.log('lodash reverse:', reversed)
console.log('lodash without a, b:', without)
console.log('lodash shuffled:', shuffled)
console.log('lodash initial:', initial)

if (typeof describe == 'function') {
    describe("test lodash chunk", () => {
        it('chunk an array into smaller array', () =>{
            let arr = [1, 2, 3, 4]
            assert.deepStrictEqual(lodash.chunk(arr, 2), [[1, 2], [3, 4]])
        })
        it('reverse the array', () => {
            let arr = [1, 2, 3]
            assert.deepStrictEqual(lodash.reverse(arr), [3, 2, 1])
        })
        it('should drop specific elements from the start of array', () => {
            let arr = [1, 2, 3, 4]
            assert.deepStrictEqual(lodash.without(arr, 1, 2), [3, 4])
        })
        it('should drop off the last element', () => {
            let arr = [1, 2, 3, 4]
            assert.deepStrictEqual(lodash.initial(arr), [1, 2, 3])
        })
        it('should shuffle the array to a random order', () => {
            let arr = [1, 2, 3, 4, 5]
            assert.notDeepStrictEqual(lodash.shuffle([...arr]), arr)
        })
    })
}