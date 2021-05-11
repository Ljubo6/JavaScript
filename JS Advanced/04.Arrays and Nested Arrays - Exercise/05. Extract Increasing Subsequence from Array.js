function solve(array){
    let result = [];
    let currentBiggestNum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= currentBiggestNum) {
            currentBiggestNum = array[i];
            result.push(currentBiggestNum);
        }
        
    }
    return result;

}
console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    ));