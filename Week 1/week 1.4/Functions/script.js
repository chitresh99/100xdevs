function sum (n){
    let total = 0;
    for(let i = 1;i <= n;i++){
        total = total + i;
    }
    return total;
}

const ans = sum(50);
console.log(ans);