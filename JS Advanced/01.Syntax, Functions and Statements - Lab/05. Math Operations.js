function solve(numOne,numTwo,operator){
    //'+', '-', '*', '/', '%', '**'
    let mathOperations = {
        '+': numOne + numTwo,
        '-': numOne - numTwo,
        '*': numOne * numTwo,
        '/': numOne / numTwo,
        '%': numOne % numTwo,
        '**': numOne ** numTwo
    }
    return mathOperations[operator];

}
console.log(solve(5, 6, '+'));
console.log(solve(3, 5.5, '*'));