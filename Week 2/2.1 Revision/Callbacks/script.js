function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumoftwo(a, b, fn) {
     let sum1 = fn(a);
     let sum2 = fn(b);
     return sum1 + sum2;
}

const ans = sumoftwo(1,2,cube);
console.log(ans);