function solve(n){
    let isDivisible = false;
    if (n % 10 === 0) {
        isDivisible = true;
        n = 10;
    }else if(n % 7 === 0){
        isDivisible = true;
        n = 7;
    }else if(n % 6 === 0){
        isDivisible = true;
        n = 6
    }else if(n % 3 === 0){
        isDivisible = true;
        n = 3;
    }else if(n % 2 === 0){
        isDivisible = true;
        n = 2;
    }
    if (isDivisible) {
        console.log(`The number is divisible by ${n}`);
    }else{
        console.log("Not divisible");
    }
    
}
solve(30);