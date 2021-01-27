function solve(n){
    for (let firstChar = 0; firstChar < n; firstChar++) {
        let first = String.fromCharCode(97 + firstChar);
        for (let secondChar = 0; secondChar < n; secondChar++) {
            let second = String.fromCharCode(97 + secondChar);
            for (let thirdChar = 0; thirdChar < n; thirdChar++) {
                let third = String.fromCharCode(97 + thirdChar);
                console.log(`${first}${second}${third}`);
            }
            
        }
    }
}
solve(3);