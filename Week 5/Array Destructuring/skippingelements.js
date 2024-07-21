const numbers = [1, 2, 3, 4, 5];

// Destructuring the first and third elements, skipping the second we do this by adding commas
const [first, , third] = numbers;

console.log(first); // Output: 1
console.log(third); // Output: 3
