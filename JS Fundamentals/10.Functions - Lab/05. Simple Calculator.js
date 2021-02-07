function calculator(numOne, numTwo, operator) {

    switch (operator) {
        case "add":
            let add = (a,b) => numOne + numTwo;
            console.log(add(numOne,numTwo));
            break;
        case "subtract":
            let subtract = (a,b) => numOne - numTwo;
            console.log(subtract(numOne,numTwo));
            break;
        case "multiply":
            let multiply = (a,b) => numOne * numTwo;
            console.log(multiply(numOne,numTwo));
            break;
        case "divide":
            let divide = (a,b) => numOne / numTwo;
            console.log(divide(numOne,numTwo));
            break;

    }
}
calculator(5,
    5,
    'multiply'
);