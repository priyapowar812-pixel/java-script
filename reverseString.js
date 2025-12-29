const inputString = "This is java script. Makes web pages interactive and dynamic. Event-driven - responds to user actions (clicks, typing, etc.)"

function reverseString() {
    let newString = "";
    let length = inputString.length; 
    for(let l= length-1; l>=0; l--) {
        newString = newString.concat(inputString[l]);
    }
    return newString;
}

console.log("reversed string is : ", reverseString());