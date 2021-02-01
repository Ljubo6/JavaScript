function solve(array){
    let arr = [];
    let j = 0;
    for (let i = array.length - 1; i >= 0; i--,j++) {

        arr[j]=(array[i]);
    }
    console.log(arr.join(" "));
}
solve(['abc', 'def', 'hig', 'klm', 'nop']);