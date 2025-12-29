const add = (num1, num2) => num1+num2;

function delayExecution(add){
    setTimeout(()=> {
       let result =  add(12, 56);
       console.log("result is :", result);
    }, 5000)
}

delayExecution(add);

