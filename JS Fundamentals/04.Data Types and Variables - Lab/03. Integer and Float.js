function solve(first,second,third){
    let sum = first + second + third;
    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
        
    } else {
        console.log(`${sum} - Float`);
    }
}
solve(9, 100, 1.1)