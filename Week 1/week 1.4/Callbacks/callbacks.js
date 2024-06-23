function square(a) {
    return a * a;
}

function cube(b) {
    return b * b * b;
}

function sumofthings(a, b, fn) {
const val1 = fn(a);
const val2 = fn(b);
return val1 + val2;
}

const ans = sumofthings(2,2,cube);
console.log(ans);
