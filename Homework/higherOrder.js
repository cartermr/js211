// map from scratch
let letters = ['a', 'b', 'c', 'd']
let letters2 = ['a', 'b', 'c', 'd']
console.log('Original Array', letters)

const mapFromScratch = (array, func) => {
    let map = []
    for(let i = 0; i < array.length; i++) {
        map.push(func(array[i]))
    }
    return map
}

let a = letters.map(element => element + 'b')
let b = mapFromScratch(letters2, element => element + 'b')

console.log('Built in map(i + "b"):', a)
console.log('Built from scratch map(i + "b"):', b)

// filter from scratch
const filterFromScratch = (array, func) => {
    let filtered = []
    for(let i = 0; i < array.length; i++) {
        if(func(array[i])) {
            filtered.push(array[i])
        }
    }
    return filtered
}

let c = letters.filter(element => element == 'c')
let d = filterFromScratch(letters2, element => element == 'c')

console.log('Built in filter("c"):', c)
console.log('Built from scratch filter("c")', d)

// reduce from scratch
let nums = [1, 2, 3, 4]
let nums2 = [1, 2, 3, 4]
console.log('Original Array:', nums)

const reduceFromScratch = (array, func) => {
    let accumulator = 0
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i]
        let currentIndex = i

        accumulator = func(accumulator, currentValue, currentIndex, array)
    }
    return accumulator
}

let e = nums.reduce((accumulator, currentValue) => accumulator + currentValue)
let f = reduceFromScratch(nums2, (accumulator, currentValue) => {return accumulator + currentValue})

console.log('Built in reduce()', e)
console.log('Built from scratch reduce()', f)