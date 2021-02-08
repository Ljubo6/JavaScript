function factorialDivision(numOne,numTwo){
    
    let result = factorial(numOne) / factorial(numTwo);
    return result.toFixed(2);

    function factorial(n){
        let output = 1;
        for (let i = 1; i <= n; i++) {
            
            output *= i;
        }
        return output;
    }
}
let result = factorialDivision(6,
    2
    );
console.log(result);