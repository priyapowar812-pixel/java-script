// define an array of 5 colors
// write a function which takes color as parameter and checks if the given color is part of the array.
// if part of array return true else return false.

const colors = ['pink', 'blue', 'green', 'yellow', 'red'];

function findcolor(color) {
    return colors.includes(color);
}
let testColor = 'green';
let isPresent = findcolor(testColor);


console.log(`${testColor} color present,  ${isPresent}`);  // true

function isColorPresent(testColor){
    for(let color of colors)
    {
        if(color===testColor)
        {
            return true;
        }
    }
    return false;
}

console.log("is purple color present", isColorPresent('purple')); // false");
