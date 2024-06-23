function sum(num1,num2,fntocall){
    let result = num1 + num2;
    fntocall(result);
}

function displayresult(data){
    console.log("result of the sum is :" + data);
}

function displayresultpassive(data){
    console.log("sums result is : "+ data);
}

const ans = sum (1,2,displayresult);