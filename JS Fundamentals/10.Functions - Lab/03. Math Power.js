function power(num,pow){
    let output = 1;
    for (let i = 0; i < pow; i++) {
        output *= num;
        
    }
    return output;
}
let result = power(2,8);
console.log(result);