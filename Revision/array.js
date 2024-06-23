// to find the price of the highest commodities

let oil = 81.97;
let coal = 136.00;
let gold = 2340.84;

const commodities = [81.97,136.00,2340.84];
const highest = commodities.length;

for(let i = 0; i < commodities.length; i++){
    commodities[i] < commodities[i + 1];
}

console.log(highest);