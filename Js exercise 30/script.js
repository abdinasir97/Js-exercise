function operate(x,y,callback){
    return callback(x,y)
}

function addition(x,y){
    return x+y
}

function substract(x,y){
    return x-y
}

function multiply(x,y){
    return x*y
}

function divide(x,y){
     return x/y
}

console.log("adding",operate(10,20,addition))

console.log("sustracion",operate(20,10,substract))

console.log("multiplication",operate(5,4,multiply))

console.log("division",operate(20,10,divide))