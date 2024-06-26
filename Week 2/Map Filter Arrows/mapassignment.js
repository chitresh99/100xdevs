/*create a map function that takes 2 inputs
an array and a transformation callback/fn
and transforms the array into a new one using 
the transformation fn*/

function custommap(input,tranform){
    const result = [];

    for(let i = 0 ; i < input.length;i++){
       result.push(tranform(input[i]))
    }

    return result;
}

const input =[1,2,3,4,5];

function tranform(i){
    return i * 2;
}

const tranformarray = custommap(input,tranform);
console.log(tranformarray);