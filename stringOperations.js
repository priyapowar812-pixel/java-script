// write a class to perform various string operations..
// take string input from constructor and assign it to class level variable.
// write function to reverse the string, write function to check if string is palindrome, write fuction to check if given character is part of string..
// convert string to lowercase, uppercase..

class StringOperations {

   
    constructor(name){
    
     this.name = name;
     this.length = name.length;
     console.log("string passed is ", this.name);
     console.log("length of sring is ", this.length);
    }
    
    reverseStr() {
     let newStr = "";
     for(let i=this.length-1 ; i>=0; i--){
        newStr += this.name[i];
     }
     
     return newStr;

    };

    checkPalindrome() {
        let i = 0;
        let j = this.length-1;

        while(i <= j){
            if(this.name[i]=== this.name[j]){
                i++;
                j--;
            } else {
                console.log("no palindrome");
                return false;
            }

        }
        console.log("palindrome");
        return true;


    }

    characterCheck(ch) {
        return this.name.includes(ch);
    }

    toLowercaseUppercase() {

     return {
        lowerCase : this.name.toLowerCase(),
        upperCase : this.name.toUpperCase()
     }
    }
    
    characterOccurance() {
        let charOccurance = {};
        let charOccur =  new Map();
        // for(let ch of this.name){
        //     if(charOccurance.hasOwnProperty(ch)){
        //         charOccurance[ch] += 1;
        //     }else {
        //         charOccurance[ch] = 1;
        //     }
        // }
        // return charOccurance;

        for(let ch of this.name){
            if(charOccur.has(ch)){
                charOccur.set(ch , charOccur.get(ch)+1);
            }else {
                charOccur.set(ch,1);
            }
        }
        return charOccur;
    }

    

}

let stringInstance = new StringOperations("saraswati");
console.log("reverse string",stringInstance.reverseStr());
console.log("is Palindrome?",stringInstance.checkPalindrome());

let ch = 'v';
console.log(`is ${ch} present`,stringInstance.characterCheck(ch));
console.log("UpperLower case", stringInstance.toLowercaseUppercase());
console.log("occurance of each character in passed string",stringInstance.characterOccurance());

