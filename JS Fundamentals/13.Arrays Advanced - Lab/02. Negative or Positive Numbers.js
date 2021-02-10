function solve(array) {

    let newArr = [];
    createNewArray(newArr,array);
    function createNewArray(newArr,array){
        for (const n of array) {
            if (n < 0) {
                newArr.unshift(n);
            } else {
                newArr.push(n);
            }
        }
        return newArr;
    }
    
    printArray(newArr)
    function printArray(newArray) {
        for (const n of newArr) {
             console.log(n);
        }
    }

}
solve([7, -2, 8, 9]);