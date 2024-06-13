function one1(){
    console.log("hello world");
}

function one2() {
    console.log("hello world 2");
}

function one3(){
    console.log("hello world 3");
}

function callhim(fn){ //here fn expects a function
fn();
}

callhim(one3); //calling the function callhim and passing another function as an arguments

//seeing undefined means you mostly didn't return
