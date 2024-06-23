// You're given an array of numbers, and you want to filter out only the even numbers from the array.

const array = [1, 2, 3, 4, 5];
const evenNumbers = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]);
    }
}

console.log(evenNumbers); 

