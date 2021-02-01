function solve(array){
    let currentArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            currentArray[i] = array[i] + i;
        }else{
            currentArray[i] = array[i] - i;
        }
        
    }
    let originalSum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    let currentrSum = currentArray.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log(currentArray);
    console.log(originalSum);
    console.log(currentrSum);


}
solve([5, 15, 23, 56, 35])