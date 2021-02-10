function solve(array){
    let doubleNum = x => x * 2;
    let reverseArray = x => x.reverse();
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0 ) {
            addToNewArray(newArray,doubleNum(array[i]));
        }
        
    }
    
    function  addToNewArray (newArray,num){
        return newArray.push(num);
    }
    reverseArray(newArray); 
    printArray(newArray);
    function printArray(newArray){
        return console.log(newArray.join(" "));
    }
}
solve([3, 0, 10, 4, 7, 3]);