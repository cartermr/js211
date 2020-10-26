/**
 * 5. Write a JavaScript program to rotate the string 'w3resource' in right direction
 * by periodically removing one letter from the end of the string and attaching it to
 * the front.
 */

let str = 'w3resource'
console.log('original string:', str)

let strArray = str.split('')

for (let i = 0; i < strArray.length; i++) {
    let a = strArray.pop()
    strArray.unshift(a)
}

str = strArray.join()
console.log('reversed string:', str)