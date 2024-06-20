const newdate = new Date();
console.log(newdate.getMonth() + 1);
console.log(newdate.getFullYear());

function calculatesum(){
    let a = 0;
  for(let i = 0; i < 10000000;i++){
      a = a + 1;
  }
  return a;

}

