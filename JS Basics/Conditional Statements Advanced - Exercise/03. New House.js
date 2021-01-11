function solve(input) {
    let flowers = input[0];
    let quantity = +input[1];
    let budget = +input[2];

    let price = 0;

    switch (flowers) {
        case "Roses":
            price = quantity * 5;
            break;
        case "Dahlias":
            price = quantity * 3.80;
            break;
        case "Tulips":
            price = quantity * 2.80;
            break;
        case "Narcissus":
            price = quantity * 3;
            break;
        case "Gladiolus":
            price = quantity * 2.50;
            break;
    }
    if(flowers === "Roses" && quantity > 80){
        price *= 0.9;
    }else if(flowers === "Dahlias" && quantity > 90){
        price *= 0.85;
    }else if(flowers === "Tulips" && quantity > 80){
        price *= 0.85;
    }else if(flowers === "Narcissus" && quantity < 120){
        price *= 1.15;
    }else if(flowers === "Gladiolus" && quantity < 80){
        price *= 1.20;
    }

    if(price <= budget){
        console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${(budget - price).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
    }

}
solve(["Narcissus",
"119",
"360"])


    ;