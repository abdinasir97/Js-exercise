
// spread opperator
let numbers = [1,2,3,];
const newNumbers = [...numbers, 4,5,6]
console.log(newNumbers)

// rest parameter
function multiply(...numbers){
    return numbers.reduce((product,numbers)=> product * numbers,1)
}

console.log(multiply(5,10,15))