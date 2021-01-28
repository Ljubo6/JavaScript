function solve(n) {
    let leaving = 0;
    let dayCounter = 0;
    let consume = 26;
    if (n >= 100) {
        while (n >= 100) {

            leaving += (n - consume);
            dayCounter++;
            n -= 10;
        }
        leaving -= consume;
        console.log(dayCounter);
        console.log(leaving);
    } else {
        console.log(dayCounter);
        console.log(leaving);
    }
}
solve(111);