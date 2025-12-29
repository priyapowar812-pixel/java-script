 function divide(a,b) {
    if(b === 0) {
        throw  new Error("Divide by zero exception");
    }
    
    return a/b;
}


 function test(a, b) {
    debugger
    // try {de
        let result = divide(a, b);
        console.log("result is ", result);
    // } catch(e) {
    //     console.log("some error: ", e.message);
    // }

    // console.log("program executed normaqlly ");
    
}

test(12, 0);
// console.log("second log")
// test(12, 1);