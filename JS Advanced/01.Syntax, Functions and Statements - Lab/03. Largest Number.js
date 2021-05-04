function solve(...params){
    let max = Math.max(...params);
    return `The largest number is ${max}.`;
}
console.log(solve(5, -3, 16));