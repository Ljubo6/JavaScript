function solve(array,magicNum){

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            
            let currentNum = array[i] + array[j];
            if (currentNum === magicNum) {
                console.log(array[i] + " " +  array[j]);
            }
        }   
    }
}
solve([1, 7, 6, 2, 19, 23],
    8
    )