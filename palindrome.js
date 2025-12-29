let inputString = " java script";

function checkPalindrome() {
    let left = 0;
    let right = inputString.length -1;

    while (left <= right) {
        if (inputString[left] === inputString[right]) {
            left++;
            right--;
        }else {
            return false;
        }
    }
    return true;
}

// console.log("String is palindrome ? ", checkPalindrome());

let reverseString = inputString.reverse();
console.log(reverseString );