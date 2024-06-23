function findsquare(n) {
return n * n;
}

function sumofsqaure(a,b){

const val1 = findsquare(a);
const val2 = findsquare(b)

return val1 + val2;
}


console.log(sumofsqaure(1,2));