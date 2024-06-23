// Function to reverse the elements of an array
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end) {
        // Swap the elements at start and end indices
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        // Move the indices towards the center
        start++;
        end--;
    }
    
    return arr;
}

// Example usage
let array = [1, 2, 3, 4, 5];
console.log("Original array:", array);

let reversedArray = reverseArray(array);
console.log("Reversed array:", reversedArray);
