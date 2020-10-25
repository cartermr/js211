/**
 * 1. Write a JavaScript program to display the current day and time in the following format:
 * 
 * Sample Output : Today is : Tuesday
 * Current time is : 10 PM : 30 : 38
 */

 // create a new date object to work with, returns the current date and time
let date = new Date()

// get the day from the new date object, convert the numeric day of the week to a string day of the week
let day = date.getDay()
switch (day) {
    case 0:
        day = 'Sunday'
        break
    case 1:
        day = 'Monday'
        break
    case 2:
        day = 'Tuesday'
        break
    case 3:
        day = 'Wednesday'
        break
    case 4:
        day = 'Thursday'
        break
    case 5:
        day = 'Friday'
        break
    case 6:
        day = 'Saturday'
        break
}

// create the time message, convert the time to string, determine if AM or PM needs to be displayed
let time;
if (date.getHours() > 12) {
    time = (date.getHours() - 12) + ' PM : ' + date.getMinutes() + ' : ' + date.getSeconds()
} else {
    time = date.getHours() + ' AM : ' + date.getMinutes() + ' : ' + date.getSeconds()
}

console.log('Today is: ' + day)
console.log('Current time is: ' + time)