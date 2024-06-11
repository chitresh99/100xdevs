function calculate (a,b,fntocall){
    const ans = fntocall(a,b);
    return ans;
}

function sum (a,b){
       return a + b;
}

const value = calculate(a,b,sum);
console.log(value);
