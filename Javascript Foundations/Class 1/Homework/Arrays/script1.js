const nums = [1,2,3,4,5];
let max = nums[0]; //starting from the zeroth index

for ( i = 1 ; i <= nums.length ; i++){
if (nums[i] > max){
    max = nums[i];
}
}
console.log(max);