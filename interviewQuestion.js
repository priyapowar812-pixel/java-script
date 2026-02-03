// program to find the max product of two numbers within an array..

const arr = [22,78,12,78,29,47];

// let sortedArray = arr.sort((a,b)=> b-a);

// let maxProduct = sortedArray[0]* sortedArray[1];

// console.log(maxProduct);


//program to empty the given array..

// arr.length = 0;
// console.log(arr);



function printRest([a,b,...rest]) {
    console.log(rest);
}

printRest(arr);


