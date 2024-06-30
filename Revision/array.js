let oil = 81.97;
let coal = 136.00;
let gold = 2340.84;

const commodities = [oil, coal, gold];
let highest = commodities[0]; // Initialize highest with the first element

for(let i = 1; i < commodities.length; i++) {
    if(commodities[i] > highest) {
        highest = commodities[i]; // Update highest if current element is greater
    }
}

console.log("Highest price among commodities:", highest);
