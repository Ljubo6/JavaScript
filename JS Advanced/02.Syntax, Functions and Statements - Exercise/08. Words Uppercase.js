function solve(input){
    let pattern = /[A-z\d]+/g;
    let arr = input.match(pattern);
    let result = [];
    for (const iterator of arr) {
        result.push(iterator.toUpperCase());
    }
    return result.join(', ');
}
console.log(solve('Hi, how are you?'));