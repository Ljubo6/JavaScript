function solve(array){
    return array.sort((a,b) => a.localeCompare(b)).map((x,index) => `${index + 1}.${x}`).join('\n');
}
console.log(solve(["John", "Bob", "Christina", "Ema"]));