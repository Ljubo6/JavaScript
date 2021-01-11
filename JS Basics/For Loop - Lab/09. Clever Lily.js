function solve(lilyAges,washingPrice,singleToysPrice){

    lilyAges = Number(lilyAges);
    washingPrice = Number(washingPrice);
    singleToysPrice = Number(singleToysPrice);

    let moneySum = 0;
    let toysCount = 0;
    let savedMoney = 0;
    let evenBirthdays = 0;

    for(let i = 1;i <= lilyAges;i++){
        if(i % 2 === 0){
            moneySum += 10;
            savedMoney += moneySum;
            evenBirthdays++;
        }else{
            toysCount++;
        }
    }

    let toyPrice = toysCount * singleToysPrice;

    let money = savedMoney + toyPrice - evenBirthdays;

    if(money >= washingPrice){
        console.log(`Yes! ${(money - washingPrice).toFixed(2)}`)
    }else{
        console.log(`No! ${(washingPrice - money).toFixed(2)}`)
    }

}
solve("21", "1570.98", "3");