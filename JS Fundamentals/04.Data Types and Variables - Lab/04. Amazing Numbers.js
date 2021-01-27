function solve(n){
    let array = n.toString();
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        
        sum += Number(array[i]);

    }
    let string = sum.toString();
    if (string.includes("9")) {
        console.log(`${n} Amazing? True`)
    } else {
        console.log(`${n} Amazing? False`)
    }
}
solve(1233);