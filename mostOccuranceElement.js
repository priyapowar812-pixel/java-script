

let numbers = [13, 15, 12, 18, 13, 13, 15, 18, 12, 13, 15, 15, 15, 25, 15, 35];

// write program to find most frequent element.
// write a program to find least frequent element.

export function getOccurances(numbers) {
    let occurance = {};
    for (let num of numbers){
        if(!occurance.hasOwnProperty(num)){
            occurance[num] = 1;
        }else{
            occurance[num] += 1;
        }
    }
    return occurance;
}

// we get the object wherein we get numbers and its occurances..
let occurance = getOccurances(numbers);
console.log(occurance);

// funtion to get a least occured number with its no. of occurances..
function getLeastOccuredNumber(occurance) {
    let nums = Object.keys(occurance);
    let counts = Object.values(occurance);

    let leastOccuredNum = nums[0];
    let leastOccurance = counts[0];
    let i=0;
    for( let count of counts){
        if(count <= leastOccurance){
            leastOccurance = count;
            leastOccuredNum = nums[i];
        }
        i++;
    }
    let leastoccuredElement = {
        number : leastOccuredNum,
        frequency : leastOccurance
    }

    return leastoccuredElement;
}

let leastoccuredElement = getLeastOccuredNumber(occurance);
console.log("least occured number : ", leastoccuredElement );

// function to get most occured number with its no. of occurances..
 function getMostOccuredNumber(occurance) {
    let nums = Object.keys(occurance);
    let counts = Object.values(occurance);
    let numberWithEntries = Object.entries(occurance);
   let i=0; // this is variable to traverse on nums array.
    let mostOccuredNum = 0;
    let mostOccurance = 0;
    for(let count of counts){
        if(count > mostOccurance){
            mostOccurance = count;
            mostOccuredNum = nums[i]
        }
        i++;
    }
    let mostOccuredElement = {

        number : mostOccuredNum,
        Frequency : mostOccurance

    };
    
    return mostOccuredElement;
 }

 let mostOccuredElement = getMostOccuredNumber(occurance);
 console.log("Most Occured Number : ", mostOccuredElement  );
