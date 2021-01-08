function solve(tripPrice,puzzlesNum,dollsNum,bearsNum,minionsNum,trucksNum){
    tripPrice = +tripPrice;
    puzzlesNum = +puzzlesNum;
    dollsNum = +dollsNum;
    bearsNum = +bearsNum;
    minionsNum = +minionsNum;
    trucksNum = +trucksNum;

    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckpPice = 2;

    let price = puzzlePrice * puzzlesNum + dollPrice * dollsNum + bearPrice * bearsNum + minionPrice * minionsNum + truckpPice * trucksNum;
    let toysNum = puzzlesNum + dollsNum + bearsNum + minionsNum + trucksNum;

    if(toysNum >= 50 ){
        price = price * 0.75;
    }

    let loan = price * 0.10;

    let profit = price - loan;
    let rest = profit - tripPrice;

    if(profit >= tripPrice){
        console.log(`Yes! ${rest.toFixed(2)} lv left.`)
    }
    else{     
        console.log(`Not enough money! ${(rest * -1).toFixed(2)} lv needed.`)
    }

}
solve("320", "8", "2", "5", "5", "1");