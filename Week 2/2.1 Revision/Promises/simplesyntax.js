// Defining them
// we don't use this 99% of the time
function promisemytime(duration) {
    const p = new Promise(function (resolve) {
      setTimeout(function(){
         resolve();
      },duration);
    });
    return p;
} 

// Calling Them

// Important thing //most important
const ans = promisemytime(1000);
ans.then(function(){
    console.log("timeout is done");
})