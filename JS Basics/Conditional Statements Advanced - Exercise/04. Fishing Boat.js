function solve(input){
    let budget = +input[0];
    let season = input[1];
    let fishmanNum = +input[2];

    let price = 0;

    if(season === "Spring"){
        price = 3000;

    }else if(season === "Summer"){
        price = 4200;

    }else if(season == "Autumn"){
        price = 4200;

    }else if(season === "Winter"){
        price = 2600;

    }

    if(fishmanNum >= 12){
        price *= 0.75;
    }else if(fishmanNum > 6){
        price *= 0.85;

    }else if(fishmanNum <= 6){
        price *= 0.90;
    }

    if(fishmanNum % 2 === 0 && season != "Autumn"){
        price *= 0.95;
    }

    if(price <= budget){
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`)
    }

}
solve(["3000",
"Summer",
"11"])

;