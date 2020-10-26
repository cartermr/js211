/**
 * 3. Write a JavaScript program to get the current date.
 * Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

let date = new Date()

let month;
if (date.getMonth < 10) {
    month = `0${date.getMonth()}`
} else {
    month = date.getMonth()
}

let day;
if (date.getDay() < 10) {
    day = `0${date.getDay()}`
} else {
    day = date.getDay()
}

let year = date.getFullYear()

console.log('Today is:')
console.log(`${month}-${day}-${year}`)
console.log(`${month}/${day}/${year}`)