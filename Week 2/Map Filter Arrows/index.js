//given an array give me a new array back in which every value is multiplied ny 2 

const input = [1 ,2, 3 ,4, 5]

const newarray = []

for (let i = 0; i < input.length;i++){
    newarray.push(input[i]*2);
}

console.log(newarray);