// Include assertion library for Unit Test
const assert = require('assert');
const { type } = require('os');

/**
 * 1. Create and arrat cars with four vehicls, first one a "Ford", and include "Honda"
 *    Console log the length of cars array
 */
console.log('** Challenge #1');
let cars = ['Ford', 'Toyota', 'Honda', 'Chevy'];
console.log('cars array ->', cars);
console.log('cars array length ->', cars.length, '\n');

/**
 * 2. Creat array moreCars with 4 cars and last one a "Honda"
 *    use .concat() to create an array totalCars
 */
console.log('** Challenge #2');
let moreCars = ['Dodge', 'Cadillac', 'Audi', 'Honda'];
let totalCars = cars.concat(moreCars);
console.log('moreCars array ->', moreCars);
console.log('totalCars array ->', totalCars, '\n');

/**
 * 3. use indexOf() to find the index of "Honda"
 *    use lastIndexOf() to find the index of "Ford"
 */
console.log('** Challenge #3');
console.log('first index of "Honda" ->', totalCars.indexOf('Honda'));
console.log('last index of "Ford" ->', totalCars.lastIndexOf('Ford'), '\n');

/**
 * 4. use join() to create a string, stringOfCars from totalCars
 */
console.log('** Challenge #4');
let stringOfCars = totalCars.join();
console.log('stringOfCars ->', stringOfCars, '\n');

/**
 * 5. use split() change stringOfCars back into array totalCars
 */
console.log('** Challenge #5');
totalCars = stringOfCars.split(',');
console.log('totalCars array ->', totalCars, '\n');

/**
 * 6. use reverse() to create array carsInReverse, listing totalCars in reverse order
 */
console.log('** Challenge #6');
let carsInReverse = totalCars.reverse();
console.log('totalCars in reverse [carsInReverse] ->', carsInReverse, '\n');

/**
 * 7. use sort() to list carsInReverse in alpha order
 */
console.log('** Challenge #7');
carsInReverse = carsInReverse.sort();
console.log('my prediction of first car is "Audi" ->', carsInReverse.indexOf('Audi'));
console.log('carsInReverse in alpha order ->', carsInReverse, '\n');

/**
 * 8. use slice() to remove "Ford" and "Honda" from carsInReverse and into removedCars
 */
console.log('** Challenge #8');
let removedCars = carsInReverse.slice(4, 5);
removedCars[removedCars.length] = carsInReverse.slice(5, 7);
removedCars = removedCars.flat();
console.log('removedCars array ->', removedCars, '\n');

/**
 * 9. use splice() to replace 2nd and 3rd items in carsInReverse with "Ford" and "Honda"
 */
console.log('** Challenge #9');
console.log('original carsInReverse array ->', carsInReverse);
carsInReverse.splice(1, 2, "Ford", "Honda");
console.log('carsInReverse 2nd and 3rd items spliced with "Ford" and "Honda" ->', carsInReverse, '\n');

/**
 * 10. use push() to add "Cadillac" and "Chevy" back into carsInReverse
 */
console.log('** Challenge #10');
carsInReverse.push('Cadillac');
carsInReverse.push('Chevy');
console.log('"Cadillac and "Chevy" pushed onto end of carsInReverse ->', carsInReverse, '\n')

/**
 * 11. use pop() to removethe last item from carsInReverse
 */
console.log('** Challenge #11');
console.log('the last item of carsInReverse ->', carsInReverse.pop(),'\n');

/**
 * 12. use shift() to remove the first item from carsInReverse
 */
console.log('** Challenge #12');
console.log('the first item of carsInReverse ->', carsInReverse.shift(),'\n')

/**
 * 13. use unshift() to add a new type of car the carsInReverse
 */
console.log('** Challenge #113');
console.log('new type of car, "BMW"')