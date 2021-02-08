function perfectNumber (n){
    return isPerfectNum(n) ? `We have a perfect number!` : `It's not so perfect.`;

    function isPerfectNum(n){
        let isPerfect = false;
        if (sum(n) === n) {
            isPerfect = true;
        }
        return isPerfect;
    }

    function sum(n){
        let sum = 0;
        for (let i = 1; i <= lastNum(n); i++) {
            if (n % i === 0) {
                sum += i;
            }

        }
        return sum;
    }

    function lastNum(n){
        let lastNum = 0;
        if (n % 2 === 0) {
            lastNum = n / 2;
        }
        return lastNum;
    }
}
let result = perfectNumber(28);
console.log(result);