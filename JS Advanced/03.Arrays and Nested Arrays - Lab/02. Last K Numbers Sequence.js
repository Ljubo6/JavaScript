function solve(length,num){
    let result = [1];
    for (let i = 0; i < length - 1; i++) {
        
        let arr = result.slice(-num)
        let currentNum = arr.reduce((a,b) => a + b);
        result.push(currentNum);
    }
    return result;
}
console.log(solve(8,2));