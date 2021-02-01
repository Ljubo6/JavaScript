function solve(array,n){

    for (let i = 0; i < n; i++) {
        let element = array.shift();
        array.push(element);
    }
    console.log(array.join(" "));
}
solve([51, 47, 32, 61, 21], 2)