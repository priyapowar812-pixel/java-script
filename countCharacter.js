const inputString = "This is java script. Makes web pages interactive and dynamic. Event-driven - responds to user actions (clicks, typing, etc.)"

// write a funtcion to count frequency of each character 

function getFrequency() {
    let frequency = {};
    let length = inputString.length;
    for ( let c =0; c< length; c++)
    {
        if(!frequency.hasOwnProperty(inputString[c])) {
            frequency[inputString[c]] = 1;
        } else{
            frequency[inputString[c]] += 1;
        }
    }
   return frequency;
}


function getFrequencyByChar() {
    let frequency = {};

    for(let c of inputString) {
        if(!frequency.hasOwnProperty(c)) {
            frequency[c] = 1;
        }else {
            frequency[c] += 1;
        }

    }
    return frequency;
}

