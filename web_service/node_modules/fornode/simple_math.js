var call_counter=require('./call_counter');

function add(firstNumber,secondNumber){
    call_counter();
    return firstNumber+secondNumber;
}

function substract(firstNumber,secondNumber){
    call_counter();
    return firstNumber-secondNumber;
}

module.exports={
    addition:add,
    substraction:substract
}