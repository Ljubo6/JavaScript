function solve(array,start,end){
    if (Array.isArray(array) === false) {
        return NaN;
    }
    if(start < 0){
        start = 0;
    }
    if(end >= array.length){
        end = array.length - 1;
    }
   let result = array.slice(start,end + 1).reduce((a,b) => a + Number(b),0);
   return result;
}
console.log(solve([10, 'twenty', 30, 40], 0, 2));