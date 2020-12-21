function solve(input){
    let rentHall = Number(input);
    let cakePrice = rentHall * 0.2;
    let drinksPrice = cakePrice - cakePrice * 0.45;
    let animatorPrice = rentHall / 3;
    let resultSum = rentHall + cakePrice + drinksPrice + animatorPrice;

    console.log(resultSum);

}
solve("2250");