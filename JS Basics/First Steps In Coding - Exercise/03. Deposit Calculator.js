function solve(deposit,period,interest){
    let depositAmount = Number(deposit);
    let depositPeriod = Number(period);
    let interestRate = Number(interest);

    let interestSum = depositAmount * (interestRate/100);
    let interestPerMonth = interestSum / 12;
    let resultSum = depositAmount + (depositPeriod * interestPerMonth);

    console.log(resultSum);
}
solve("200",
"3",
"5.7");
