//find the price of two commodities

function twocommodities(a,b,ncommodities){
const ans = ncommodities(a,b);
return ans;
}

function sumoftwo(gold,coal){
return gold + coal;
}

function difference(gold,coal){
    return gold - coal
}

const add = twocommodities(85,22,difference);
console.log(add);

