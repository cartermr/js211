// Build a bubble sort

let numArray = [1, 4, 3, 5, 2, 6, 7, 9, 8, 10]

console.log(numArray)

const bubbleSort = (arr) => {
    for(let a = 0; a < arr.length; a++) {
        for(let b = 0; b < arr.length; b++) {
            if(arr[b] > arr[b + 1]) {
                let tmp = arr[b]
                arr[b] = arr[b + 1]
                arr[b + 1] = tmp
            }
        }
    }
}

bubbleSort(numArray)

console.log(numArray)