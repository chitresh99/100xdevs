function revarr(arr) {
    let start = 0;
    let end = arr.length - 1;
    

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr;
}

let array = [1,2,3,4,5];
console.log("original array :",array);

let reversedarray = revarr(array);
console.log("reversed array: ",reversedarray);
