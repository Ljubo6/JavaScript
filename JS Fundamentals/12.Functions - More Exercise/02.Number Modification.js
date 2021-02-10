function numberModification(n){
    let array = createArray(n); 
    function createArray(n){
        return n.toString().split("").map(Number);
    }

    let average =  avg(array);
    function avg(array){
        let sum = array.reduce((a,b) => a + b,0);
        return sum / array.length;
    }

    while(average <= 5){
        array =  modifyArray(array);
        average = avg(array);
    }

    function modifyArray(array){
        array.push('9');
        return array.map(Number);
    }

    let result = array.join("");
    return result;
}
let result = numberModification(5835);
console.log(result);