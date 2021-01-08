function solve(movieBudget,actorsNum,artistDressPrice){
    movieBudget = +movieBudget;
    actorsNum = +actorsNum;
    artistDressPrice = +artistDressPrice

    
    let decoreSum = movieBudget * 0.1;

    let dressSum = actorsNum * artistDressPrice;

    if(actorsNum > 150){
        dressSum *= 0.9;
    }
    let movieSum = decoreSum + dressSum;

    let result = movieBudget - movieSum;

    if(result >= 0 ){
        console.log("Action!");
        console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`);
    }else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(result * -1).toFixed(2)} leva more.`);
    }

}
solve("9587.88",
"222",
"55.68")


;