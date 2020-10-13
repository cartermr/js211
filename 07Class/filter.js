

let friends = ['mark', 'mary', 'matt', 'maddie', 'jack', 'james'];

let justJs = friends.filter(function(element, index){
    if(element[0] == 'j'){
        return true;
    } else {
        return false;
    };
});

console.log(justJs);

justJs.forEach(function(element, index){
    console.log(`${index} = ${element}`);
});

console.log();

let pilots = [
    {
        name: 'James',
        type: 'Jet',
        civilian: true
    },
    {
        name: 'Jack',
        type: 'Helicopter',
        civilian: true
    },
    {
        name: 'Matt',
        type: 'Prop',
        civilian: false
    },
    {
        name: 'Mark',
        type: "Helicopter",
        civilian: false
    },
    {
        name: 'Amelia',
        type: "Jet",
        civilian: false
    }
];

let civilianPilots = pilots.filter(function(element, index){
    return element.civilian == true;
});
console.log('The civilian pilots are:', civilianPilots);

console.log();

let jetPilots = pilots.filter(function(element, index){
    return element.type == 'Jet';
});
console.log('The Jet pilots are', jetPilots);