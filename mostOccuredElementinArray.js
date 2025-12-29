import { getOccurances } from "./mostOccuranceElement.js";

// let occurance = {
//      12 : 5,
//      13 : 8,
//      11 : 3,
//      10 : 5
// };
let numbers = [13, 15, 12, 18, 13, 13, 15, 18, 12, 13, 15, 15, 15, 25, 15, 35];

let occurance = getOccurances(numbers)

function mostOccuredElement(occurance){
    let nums = Object.keys(occurance);

    console.log(nums);
   
    let mostOccurance = 0;
    let number = 0;

    for(let num of nums) {
        if(occurance[num] > mostOccurance){
            mostOccurance = occurance[num];
            number = num;
        }
    }
    let mostOccuredNumber = {
           number : number,
           mostOccurance: mostOccurance
        };
    return mostOccuredNumber;
}

console.log("most occured number is : ", mostOccuredElement(occurance) );
