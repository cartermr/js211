let numArray = [1, 4, 3, 5, 2, 7, 6, 9, 8, 10]
console.log('The original array:')
console.log(numArray)

// quick sort
let qSort = numArray.slice()

const quickSort = (array, low, high) => {
    if(low < high) {
        let part = partition(array, low, high)

        quickSort(array, low, part - 1)
        quickSort(array, part + 1, high)
    }
}

const partition = (array, low, high) => {
    let tmp

    let pivot = array[high]

    for(let j = low; j < high; j++) {
        if(array[j] < pivot) {
            tmp = array[low]
            array[low] = array[j]
            array[j] = tmp
            low++
        }
    }
    tmp = array[low]
    array[low] = array[high]
    array[high] = tmp
    return low
}

quickSort(qSort, 0, qSort.length - 1)
console.log('Sorted with Quick Sort:')
console.log(qSort)

// Build a bubble sort
let bubSort = numArray.slice()
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

bubbleSort(bubSort)
console.log('Sorted with Bubble Sort:')
console.log(bubSort)

// insertion sort
let insertSort = numArray.slice()