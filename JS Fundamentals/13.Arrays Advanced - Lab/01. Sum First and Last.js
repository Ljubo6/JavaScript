function solve(array){
    let first = Number(array.shift());
    let second = Number(array.pop());

    function sumFirstAndSecond(first,second){
        return first + second;
    }
    return sumFirstAndSecond(first,second)
}
let result = solve(['20', '30', '40']);
console.log(result);