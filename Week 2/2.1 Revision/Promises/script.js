function myowntime(duration){
    let p = new Promise(function(resolve){
     setTimeout(resolve,1000);
    });
    return p;
}

myowntime(1000)
.then(function(){
console.log("log the first thing");
});


// The .then() method is used to define what should 
// happen once the Promise is resolved (success) or rejected (failure).

//Promise is Just another class in javascript

