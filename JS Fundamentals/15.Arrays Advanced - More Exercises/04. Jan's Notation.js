function solve(array){
    let currentArray = [];
    if(array.length < 2 ){
        console.log("Error: not enough operands!");
        return;
    }
    for (let element of array) {
        if(Number.isInteger(element)) {
            let num = element;
            currentArray.push(num);
        }else{
            let operator = element;
            if(currentArray.length < 2 ){
                console.log("Error: not enough operands!");
                return;
            }
            calculator(operator,currentArray);
        }
    }
    function calculator(operator,currentArray){
        let result = 0;
        if (operator === "+") {

            result = currentArray[currentArray.length - 2] + currentArray[currentArray.length - 1];

        }else if(operator === "-"){

            result = currentArray[currentArray.length - 2] - currentArray[currentArray.length - 1];

        }else if(operator === "*"){

            result = currentArray[currentArray.length - 2] * currentArray[currentArray.length - 1];

        }else if(operator === "/"){

            result = currentArray[currentArray.length - 2] / currentArray[currentArray.length - 1];

        }
        let index = currentArray.indexOf(currentArray[currentArray.length - 2]);

        currentArray.splice(index,2);
        currentArray.push(result);   
        return currentArray;
    }
    if (currentArray.length > 1) {
        console.log("Error: too many operands!");
    }else{
        console.log(currentArray[0]);
    }
    
}
solve([1]
       
);