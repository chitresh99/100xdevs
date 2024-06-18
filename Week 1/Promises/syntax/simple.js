let a = new Promise(function(resolve){
resolve("hi there"); //async logic
});

a.then(function(){
console.log(a);
});