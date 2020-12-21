function solve(days,sweetsMaster,cakes,waffles,pancakes){
    let daysNum = Number(days);
    let sweetsMasterNum = Number(sweetsMaster);
    let cakesNum = Number(cakes);
    let wafflesNum = Number(waffles);
    let pancakesNum = Number(pancakes);

    let cakesPerDay = cakesNum * 45;
    let wafflesPerDay = wafflesNum * 5.80;
    let pancakesPerDay = pancakesNum * 3.20;
    let allSumPerDay = (cakesPerDay + wafflesPerDay + pancakesPerDay) * sweetsMaster;
    let allSumPerCampain = allSumPerDay * days;
    let amountAfterCost = allSumPerCampain - (allSumPerCampain / 8);

    console.log(amountAfterCost);
}
solve("23",
"8",
"14",
"30",
"16")
