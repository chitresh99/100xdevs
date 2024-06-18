let a = new Promise(function(resolve){
resolve("hi there"); //async logic
});

a.then(function(){
console.log(a);
});

// In the real world we will have a bunch of async functions
// which will return promises
// we have to call them and do a '.then' on them