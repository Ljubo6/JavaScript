function solve(array){
    let evenSum = 0;
    let oddSum = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenSum += array[i];
        }else{
            oddSum += array[i];
        }

        
    }
    sum = evenSum - oddSum;
    console.log(sum);
}
solve([1,2,3,4,5,6])