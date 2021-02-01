function solve(array){
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
       
        for (let j = 0; j < i; j++) {
            leftSum += array[j];
            
        }
        for (let l = i + 1; l < array.length; l++) {
            
            rightSum += array[l];
        }
        if (leftSum === rightSum) {
            index = i;
            break;
        }
        
    }
    if (index > -1) {
        console.log(index);
    }else{
        console.log("no");

    }
}
solve([1]);