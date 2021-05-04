function solve(numOne,numTwo){
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    let result = 0;
    for (let index = numOne; index <= numTwo; index++) {
        result += index;
        
    }
    return result;
}
console.log(solve('1', '5' ));
console.log(solve('-8', '20' ));