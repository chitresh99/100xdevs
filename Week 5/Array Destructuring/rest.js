const numbers = [1, 2, 3, 4, 5];

// Destructuring the first element and the rest
//use the rest syntax (...) to collect the remaining elements into a new array.

const [first, ...rest] = numbers;

console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]
