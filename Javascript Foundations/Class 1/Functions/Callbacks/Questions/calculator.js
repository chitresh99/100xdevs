// Task: Implement the functions subtract, multiply, and divide. Then use them as callbacks in calculatenum.

function calculate (a,b,fntocall){

    const ans = fntocall(a,b);
    return ans;
}

function substract (a,b){
    return a - b;
}

function multiply (a,b){
    return a * b;
}

function divide (a,b){
    return a / b;
}

const ans = calculate(1,2,substract);
console.log(ans);


