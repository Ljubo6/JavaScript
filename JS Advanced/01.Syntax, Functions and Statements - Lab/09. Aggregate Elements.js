function solve(array){
   console.log(array.reduce((a,b) => a + b));
   console.log(array.reduce((a,b) => a + 1/b,0));
   console.log(array.reduce((a,b) => a.toString().concat(b)));
}
solve([2, 4, 8, 16]);