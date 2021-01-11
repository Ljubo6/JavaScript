function solve(input) {
    n1 = +input[0];
    n2 = +input[1];
    let operator = input[2];
    let result = 0;
    let oddEven = "";
    if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
        return;
    }
    
    switch (operator) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            break;
        case "%":
            result = n1 % n2;
            break;
    }

    if(operator === "+" || operator === "-" || operator === "*"){
        if(result % 2 === 0){
            oddEven = "even"
        }else{
            oddEven = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${oddEven}`);
    }else if(operator === "%"){
        console.log(`${n1} ${operator} ${n2} = ${result}`);
    }else{
        console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
    }
}
solve(["7",
"3",
"*"])


;

