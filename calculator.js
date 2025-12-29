const division = (num1,num2) => num1/num2;
const multiplication = (num1,num2) => num1*num2;
const addition = (num1,num2) => num1 + num2;
const substraction = (num1,num2) => num1 - num2;

function calc (num1,num2,operator) {
    let result = operator(num1,num2);
    return result;
}

console.log("result:", calc(14,16,division));
console.log("result:", calc(26,56,((num1,num2) => num1%num2)));