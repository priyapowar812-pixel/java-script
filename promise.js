const resolve = (message) => {
    console.log(message);
}

const reject = (error) => {
    console.error(error);
}

function divide(num1, num2){
    if (num2 === 0){
        throw new Error("invalid input. divider should not be zero");
    }
    return num1/num2;
}

function makePromise(num1, num2) {
    return new Promise((resolve, reject) => {
         try {
            let result = divide(num1,num2);
            resolve(`result is ${result}`)
         } catch (error) {
            reject(error.message);
         }
    });
}

makePromise(15 , 1)
    .then(resolve)
    .catch(reject);



    const arr = [2, 3, 4]
    arr.push(5, 6, 7)

    let a = "mahesh"
    a = "suresh"