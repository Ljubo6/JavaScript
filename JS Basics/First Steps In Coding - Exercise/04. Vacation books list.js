function solve(sheetsNum,sheetsPerHour,daysNum){
    let sheetsAmount = Number(sheetsNum);
    let sheetsSumPerHour = Number(sheetsPerHour);
    let daysSum = Number(daysNum);
    let allTimeReading = sheetsAmount / sheetsSumPerHour;
    let allTimeReadingPerDay = allTimeReading / daysNum;

    console.log(allTimeReadingPerDay);

}
solve("212",
"20",
"2");
