let numbers =[ 49 , 51, 52, 55, 56, 59, 60];
let oddNumbers = [];
let evenNumbers = [];

for(let number of numbers) {
    if(number % 2 === 0) {
        evenNumbers.push(number);
    }
    else {
        oddNumbers.push(number);
    }
}

console.log("Odd Numbers: ", oddNumbers);
console.log("Even Numbers: ", evenNumbers);