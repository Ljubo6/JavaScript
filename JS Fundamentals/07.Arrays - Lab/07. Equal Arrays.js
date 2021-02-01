function solve(firstArray,secondArray){
    let difIndex = -1;
    let sum = 0;
    for (let i = 0; i < firstArray.length; i++) {
        if (Number(firstArray[i]) !== Number(secondArray[i])) {
            difIndex = i;
            console.log(`Arrays are not identical. Found difference at ${difIndex} index`);
            return;
        }
        sum += Number(firstArray[i]);
        
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
solve(['1'], ['10'])
