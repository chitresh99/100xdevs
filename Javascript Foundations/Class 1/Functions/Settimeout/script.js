function greet (){
      console.log("hello world");
}

setTimeout(greet, 1 * 1000);

setTimeout(function() {
    console.log('This message will appear after 3 seconds.');
}, 3000);