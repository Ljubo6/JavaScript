function solve(array){
    array.sort((a,b) => a - b);
    let firstTwoSmallest = array.slice(0,2);
    printArray(firstTwoSmallest);
    
    function printArray(array){
        return console.log(array.join(" "));
    }
}
solve([3, 0, 10, 4, 7, 3]);