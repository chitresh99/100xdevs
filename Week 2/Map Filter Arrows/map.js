//given an array give me a new array back in which every value is multiplied ny 2 

const input = [1 ,2 ,3,4 ,5];

// function tranform(i){
//     return i * 2;
// }

// const ans = input.map(tranform);
// console.log(ans);

//actual syntax

const ans = input.map(function tranform(i){
    return i * 2;
});
console.log(ans);
