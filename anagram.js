let one = "man";
let two = "nan";

function checkAnagram() {
    
    if( one.length !== two.length) {
        return false;
    }

    let firstStringOccurances = getOccurance(one);
    let secondStringOccurances = getOccurance(two);

    let firstArrayKeys = Object.keys(firstStringOccurances);

     for(let key of firstArrayKeys) {
            if(secondStringOccurances.hasOwnProperty(key)){
                if(firstStringOccurances[key] !== secondStringOccurances[key]){
                    return false; // no anagram
                }
            }else {
                return false; // no anagram
            }
        }
    return true; // anagram
}

function getOccurance(str) {
    let occurance = {};

    for (let c of str){
        if(!occurance.hasOwnProperty(c)) {
            occurance[c] =1;
        }else {
            occurance[c] += 1;
        }
    }
    return occurance;
}

console.log(checkAnagram());