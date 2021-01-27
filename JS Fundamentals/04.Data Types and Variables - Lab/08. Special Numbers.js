function solve(n){
    
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            let intNum = num % 10;
            sum  += intNum;
            num = parseInt(num / 10);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        
    }
}
solve(15);