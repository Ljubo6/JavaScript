function solve(array){
    let start = Math.floor(array.length / 2);
    return array.sort((a,b) => a - b).slice(start);
}
console.log(solve([3, 19, 14, 7, 2, 19, 6]));