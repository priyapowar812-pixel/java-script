const inputArray = [12, 13, 25, 12, 36, 13, 25, 25, 12, 30, 40];

// write an algorithm to find the k most frequent elements

function getKMostFrequent(inputArray, k) {
   let occurance = getOccurance(inputArray);
   let bucketArray = bucketing(occurance);

   let result = [];

    for (let i= bucketArray.length-1; i>= 0; i--) {
        let element = bucketArray[i];
        if(element) {
            for(let e of element) {               
                if(result.length < k) {
                    result.push(e);
                }
            }
        }
    }
    return result;
   
}

console.log("the k most frequent elements of an array are", getKMostFrequent(inputArray, 2) );

function bucketing(occurance) {
    let bucketArray = [];
    
    let keys = Object.keys(occurance);
    for(let key of keys) {
        let value = occurance[key];
        if(!bucketArray[value]) {
            bucketArray[value] = [key];
        }else {
            bucketArray[value].push(key);
        }
    }
    return bucketArray;

}

function getOccurance(inputArray) {
    let occurance = {};
    for(let number of inputArray) {
        if(!occurance.hasOwnProperty(number)) {
            occurance[number] = 1;
        }else {
            occurance[number] += 1;
        }
    }
    return occurance;
}

