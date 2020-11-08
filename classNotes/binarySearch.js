// What are algorithims
// All the steps to take to solve something



let fruits = ["apple", "banana", "cucumber", "dragon fruit", "edemama", "fig", "grapes", "habanaro", "ita palm", "kumquat", "jalapenos", "lemon", "mango", "nectarine", "orange", "pineapple", "quince", "raspberry", "strawberry", "tangerine", "ugly fruit", "vanilla bean", "watermelon", "xigua melon", "yunnan hackberry", "zuchini"]

function simpleSearch(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if(needle == haystack[i]) {
            return true
        }
    }
    return false
}

function binarySearch(haystack, needle) {
    let min = 0
    let max = haystack.length - 1

    while (min <= max) {

        let mid = parseInt((min + max) / 2)
        let element = haystack[mid]

        if (needle < element) {
            max = mid - 1
        } else if (needle > element) {
            min = mid + 1
        } else {
            return mid
        }                
    }
    return -1
}

console.log('is trumpet in my fruits?', binarySearch(fruits, 'trumpet'))
console.log('is avacado in my fruits?', binarySearch(fruits, 'avacado'))
console.log('is watermelon in my fruits?', binarySearch(fruits, 'watermelon'))
console.log('is apple in my fruits?', binarySearch(fruits, 'apple'))