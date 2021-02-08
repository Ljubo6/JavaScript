function smallestNum(numOne,numTwo,numThree){
    let min = Number.MAX_SAFE_INTEGER;

    for (let n of arguments) {
        smallerNum(n);
    }

    function smallerNum(n){
        if (n < min) {
            min = n;
        }
    }

    return min;
}
let result = smallestNum(2,
    5,
    3
);
console.log(result);