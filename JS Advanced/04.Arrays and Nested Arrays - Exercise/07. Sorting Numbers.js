function solve(array){
    array.sort((a,b) => a - b);
    let result = [];
    while (array.length) {
        let first = array.shift();
        let second = array.pop();
        result.push(first,second);
    }
    return result;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));