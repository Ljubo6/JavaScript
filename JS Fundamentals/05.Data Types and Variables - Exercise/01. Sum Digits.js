function solve(n){
    let sum = 0;
    while (n > 0) {
        let currentNum = n % 10;
        sum += currentNum;
        n = parseInt(n / 10);
    }
    console.log(sum);
}
solve(245678)