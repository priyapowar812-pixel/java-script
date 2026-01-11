const numbers = [40, 32, 25,34, 99, 200,168, -24];

function findMax(numbers) {
    let max = numbers[0];

    for(let num of numbers) {
        if(num > max){
            max = num;
        }        
    }
    return max;
}
console.log("max number in array",findMax(numbers));