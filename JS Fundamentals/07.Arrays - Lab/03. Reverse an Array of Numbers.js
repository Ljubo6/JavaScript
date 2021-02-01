function solve(n,input){
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(input[i])
        
    }
    array.reverse();
    console.log(array.join(" "));

}
solve(3, [10, 20, 30, 40, 50]);