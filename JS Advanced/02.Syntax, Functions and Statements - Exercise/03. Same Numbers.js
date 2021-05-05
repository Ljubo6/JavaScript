function solve(num){
    num = num.toString().split('');
    let element = num[0];
    return `${num.every(x => x === element)}\n${num.map(Number).reduce((a,b) => a + b)}`;

}
console.log(solve(12345));