function solve(array){
    while (array.length > 1) {
        let currentArray = [];
       for (let i = 0; i < array.length - 1; i++) {
           
           let sum = array[i] + array[i + 1];
           currentArray.push(sum);
       } 
       array = currentArray;
    }
    console.log(array[0]);
}
solve([1])