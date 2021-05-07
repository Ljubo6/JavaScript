function solve(array){
    let arr = [];
    array.forEach( x => {
        x >= 0 ? arr.push(x) : arr.unshift(x);
    });
    return arr;
}
console.log(solve([7, -2, 8, 9]));