function addAndSubtract(numOne,numTwo,numThree){
    function sum (a,b){
        return a + b;
    }
    function subtract(a,b){
        return a - b;
    }
    return subtract(sum(numOne,numTwo),numThree);
}
let result = addAndSubtract(23,
    6,
    10
    );
console.log(result);