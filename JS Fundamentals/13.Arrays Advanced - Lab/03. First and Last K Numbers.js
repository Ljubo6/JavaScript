function solve(array){
    let n = Number(array.shift());
    function leftArray(array,n){
        return console.log(array.slice(0,n).join(" "));
    }
    function rightArray(array,n){
        return console.log(array.slice(-n).join(" "));
    }
    leftArray(array,n);

    rightArray(array,n);

}
solve([2, 
    7, 8, 9]
    );