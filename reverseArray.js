let array = [1 , 2, 3, 4, 5];

let reversedArray = [];

for(let i=array.length-1; i>=0; i--)
{
    reversedArray.push(array[i]);
}

console.log("Original Array:", array);
console.log("Reversed Array:", reversedArray);
