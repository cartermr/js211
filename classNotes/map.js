
let numbers = [1, 3, 123, 12, 4, 4, 9, 10];

let romanTranslator = function(number){
    if(number == 1){
        return 'I';
    };
    if(number == 2){
        return 'II'
    };
    if(number == 3){
        return 'III'
    };
    if(number == 4){
        return 'IV'
    };
    if(number == 5){
        return 'V'
    };
    return number;
};

let romanNumbers = numbers.filter(function(element, index){
    if(element <= 5){
        return true;
    };
}).map(romanTranslator);

romanNumbers.forEach(
    function(element){
        console.log(element);
    }
);