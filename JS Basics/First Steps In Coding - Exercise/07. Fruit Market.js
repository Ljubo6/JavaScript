function solve(strawberies,bananasKg,orangesKg,raspberiesKg,strawberiesKg){
    let strawberyPrice = Number(strawberies);
    let babanaQuantity = Number(bananasKg);
    let orangeQuantity = Number(orangesKg);
    let raspberyQuantity = Number(raspberiesKg);
    let strawberyQuantity = Number(strawberiesKg);

    let raspberyPrice = strawberyPrice / 2.0;
    let orangePrice = raspberyPrice - (raspberyPrice * 0.4);
    let bananaPrice = raspberyPrice - (raspberyPrice * 0.8);


    let raspberyAmount = raspberyQuantity * raspberyPrice;
    let orangeAmount = orangeQuantity * orangePrice;
    let bananaAmount = babanaQuantity * bananaPrice;
    let strawberyAmount = strawberyQuantity * strawberyPrice;

    let result = raspberyAmount + orangeAmount + bananaAmount + strawberyAmount;

    console.log(result);


}
solve("48",
"10",
"3.3",
"6.5",
"1.7");

