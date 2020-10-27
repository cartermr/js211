/**
 *  -- Higher Order Functions
 * 
 * Function that takes a function as a parameter
 * Can return a function
 * Makes functional programming possible
 * Lessens the chance of errors
 */

 let friends = ['mark', 'mary', 'matt', 'maddie'];

const printer = (element, index, collection) => {
    if(index == 0){
        console.log('-------------------------');
    };
    console.log(`${index} = ${element}`);
    //console.log("the entire array is", collection);
    if(index == collection.length - 1){
        console.log('-------------------------');
    }
};

console.log('Printing Friends')
friends.forEach(printer);

console.log();

let matrix = [
    ['x', 'x', 'o'],
    ['o', 'x', 'o'],
    ['x', 'o', 'o']
];

console.log('Printing Matrix')
matrix.forEach(function(row, outsideIndex){
    row.forEach(function(cell, insideIndex){
        console.log(`${outsideIndex}, ${insideIndex}, = ${cell}`);
    });
});