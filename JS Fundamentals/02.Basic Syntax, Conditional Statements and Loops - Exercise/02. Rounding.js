function solve(num, precision){
    if (precision > 15) {
        precision = 15;
    }
    let current = parseFloat(num.toFixed(precision));
    console.log(current);
}
solve(10.5,3)