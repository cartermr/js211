// Build a bubble sort

let numArray = [1, 4, 3, 5, 2, 6, 7, 9, 8, 10]

console.log(numArray)

const bubbleSort = (numbers) => {
    for (let a = 0; a < numbers.length; a++) {
        for (let b = 0; b < numbers.length; b++) {
            if (numbers[b] > numbers[b+1]) {
                let x = numbers[b]
                let y = numbers[b+1]
                numbers[b] = y
                numbers[b+1] = x
            }
        }
    }
}

bubbleSort(numArray)

console.log(numArray)