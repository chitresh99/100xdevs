function findsum(n) {
    let ans = 0;
    for(let i = 0; i < n ; i++){
        ans += i;
    }
    return ans;
}

function findsumtill100(){
    console.log(findsum(100));
}

setTimeout(findsumtill100,1000);

console.log("hello world");