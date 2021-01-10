function solve(budget,season){
    budget = Number(budget);
    let destination = "Bulgaria";
    let overnight = "Hotel";
    let price = 0;

    if(budget > 1000){
        price = budget * 0.90;
        destination = "Europe";
        overnight = "Hotel";
    }else if(budget > 100){
        if(season === "summer"){
            price = budget * 0.40;
            overnight = "Camp"
        }else{
            price = budget * 0.80;
            overnight = "Hotel";
        }
        destination = "Balkans";
    }else{
        if(season === "summer"){
            price = budget * 0.30;
            overnight = "Camp"
        }else{
            price = budget * 0.70;
            overnight = "Hotel";
        }
        destination = "Bulgaria";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${overnight} – ${price.toFixed(2)}`);
}
solve("678.53", "winter");