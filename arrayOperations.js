//take one array . write a function to make squares of each elements of array. using array.map()

let nums = [22,12,8,15,18,19, 22, 12, 8, 22, 19, 18, 30];


function getOccurances(nums) {
    let occurance = new Map();
    for(let num of nums){
        if(!occurance.has(num)){
           occurance.set(num,1);
        }else {
            let c = occurance.get(num);  
            occurance.set(num, c+1);  
        }
    }

    // console.log(occurance.size)

    return occurance;

}

console.log("occurances are ", getOccurances(nums));

function getSquares(nums){
//  const result = nums.map((num)=> {
//     return {
//         num,
//         square : num * num
//     }
//  });

//  return result;
let result = [];

for(let num of nums) {
    let numSquare = {
        num,
        square : num * num
    };
    result.push(numSquare);
}
return result;
}

// console.log(getSquares(nums));