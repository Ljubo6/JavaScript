function solve(array){
    return array.map(x => x * 2).filter((x,index) => index % 2 !== 0).reverse().join(' ');
}
console.log(solve([3, 0, 10, 4, 7, 3]));