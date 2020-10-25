/**
 * 2. Write a JavaScript program to print the contents of the current window.
 */

// get access to the print button on the HTML page
let printBtn = document.getElementById('print')

// add a click event to the print button, pass in a function that calls window.print() to print the current window
printBtn.addEventListener('click', () => {
    window.print()
})