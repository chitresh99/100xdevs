// const arr = [1,2,3,4,5];
// const evennumbers = [];

// for(i = 0; i <arr.length;i++){
//     if(arr[i]%2 == 0){
//         evennumbers.push(arr[i]);
//     }
// }

// console.log(evennumbers);

const arr = [1,2,3,4,5];

function filterlogic(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}


const ans = arr.filter(filterlogic);
console.log(ans);