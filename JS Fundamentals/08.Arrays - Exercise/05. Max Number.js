function solve(array){
    let outputArray = [];
    for (let i = 0; i < array.length; i++) {
        let maxElement = -10000000;
        for (let j = i + 1; j < array.length; j++) {
            
            if (maxElement < array[j]) {
                maxElement = array[j];
            }
        }
        if (array[i] > maxElement) {
           outputArray.push(array[i]); 
        }
        
    }
    console.log(outputArray.join(" "));
}
solve([27, 19, 42, 2, 13, 45, 48]);