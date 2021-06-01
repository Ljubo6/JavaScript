function solve(num){
    return function(param){
        return num + param
    }
}
let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));