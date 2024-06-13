// push -> pushes a number on the the array 
// pop -> pops a number from the array
// shift -> removes an element which is at the begining of the array
// unshift -> adds something in the beginning of the array
//concat -> Intial array + Second array

// pop
const arr = [1,2,3,4];
arr.pop(); 
console.log(arr);

//push

const brr = [1,2,3,4];
brr.push(2); //2 is the value here
console.log(brr);

//shift 

const crr = [1,2,3,4];
crr.shift();
console.log(crr);

//unshift

const drr = [1,2,3,4];
drr.unshift(0); //puts something in the front of the array
console.log(drr);

//output :-

// [ 1, 2, 3 ]
// [ 1, 2, 3, 4, 2 ]
// [ 2, 3, 4 ]
// [ 0, 1, 2, 3, 4 ]

console.log("-----------");

//concat

const firstrarray = [1,2,3,4];
const secondarray = [5,6,7,8];

const finalarray = firstrarray.concat(secondarray);
console.log(finalarray);

// console.log(firstrarray.concat(secondarray));

//callback 

// function calculate1 (a,b,arithematic){
//     const ans = arithematic(a,b);
//     return ans;
// }

// function sum (a,b) {
//     return a + b;
// }

// const value1 = calculate1(1,2,sum);
// console.log(value1);

//back t0 manipulating arrays

//forEach -> This will print each array seperately in an array also foreach accepts function as an argument

const runningoutofnames = [1, 2, 3, 4];

function damn(str){
  console.log(str);
}

runningoutofnames.forEach(damn);


// second option

// runningoutofnames.forEach(item => console.log(item));



