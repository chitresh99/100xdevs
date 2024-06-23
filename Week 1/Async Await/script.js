function chitreshasyncfunction () {
    let p = new Promise(function(resolve){
       setTimeout(function() {
          resolve("hi there");
       },3000)
    });
    return p;
};

async function main() {

    let value = await chitreshasyncfunction();
    console.log(value);
}

main();
