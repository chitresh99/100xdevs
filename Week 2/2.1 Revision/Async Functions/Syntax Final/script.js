function myownsettime(callback,duration) {
setTimeout(function(){
callback();
},duration);
}


//to call it
myownsettime(function(){

},10000)