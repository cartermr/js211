// 1. do ... while loop 100 to 1000
let a = 0
console.log('1. do ... while loop of 1 to 1000')
console.log('----------------------------------')
do {
    a = a + 1
    console.log(a)
} while (a < 1000)
console.log('\n')

// 2. Create a person object wit key value pairs
let person = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
}
console.log('2. Create object called person')
console.log('------------------------------')
console.log('person object ->', person)
console.log()

// 3. function to log out the key values of person object
let displayKeys = (obj) => {
    let keys = Object.keys(obj)
    console.log(keys)
}
console.log('3. Function displayKeys to log out the person object keys')
console.log('---------------------------------------------------------')
displayKeys(person)
console.log()

// 4. function to lop out the keys and values of person object
let displayKeyValue = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`)
    }
}
console.log('4. Function displayKeyValue to log out the person object key value pairs')
console.log('------------------------------------------------------------------------')
displayKeyValue(person)
console.log()

// 5. create array of multiple person objects
let arrayOfPersons = [
    {firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1995',
    gender: 'female'},
    {firstName: 'John',
    lastName: 'Doe',
    birthDate: 'Jun 6, 1948',
    gender: 'male'},
    {firstName: 'Bob',
    lastName: 'Hope',
    birthDate: 'Feb 5, 1963',
    gender: 'male'},
    {firstName: 'Julie',
    lastName: 'Jones',
    birthDate: 'Jul 5, 1998',
    gender: 'female'}
]
console.log('5. Create array of objects')
console.log('--------------------------')
console.log('Array of person objects ->', arrayOfPersons)
console.log()

// 6. function to use for ... of loop to log out odd birth years
let oddBirthYears = (obj) => {
    for (const people of obj) {
        let birthYear = people.birthDate.slice(-4,)
        if (birthYear % 2 != 0) {
            console.log(people.birthDate)
        }
    }
}
console.log('6. function to use for ... of loop to log out odd birth years')
console.log('-------------------------------------------------------------')
oddBirthYears(arrayOfPersons)
console.log()

// 7. use map() on arrayOfPersons to log out thier information
console.log('7. use map() on arrayOfPersons to log out thier information')
console.log('-----------------------------------------------------------')
let mapped = arrayOfPersons.map(people => people.firstName + ' ' + people.lastName + ' was born on ' + people.birthDate + ' and is a ' + people.gender)
console.log(mapped)
console.log()

// 8. use filter() on arrayOfPersons to log out only the males
console.log('8. use filter() on arrayOfPersons to log out only the males')
console.log('-----------------------------------------------------------')
let filtered = arrayOfPersons.filter(people => people.gender == 'male')
console.log(filtered)
console.log()

// 9. function to return true if birthDate is before jan 1, 1990
let birth = person.birthDate.split(/\s|\W\s/)

const bornBefore = () => {
    
}

console.log(birth)