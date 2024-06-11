function calculatenum (a,b,arihtmatic){

    const ans = arihtmatic(a,b);
    return ans;
}

function sum(a,b){
    return a + b;
}

const value = calculatenum(1,2,sum);
console.log(value);

//simple stuff
// function calculate(a,b){
//          return a + b;
// }

// const ans = calculate(1,2);
// console.log(ans);