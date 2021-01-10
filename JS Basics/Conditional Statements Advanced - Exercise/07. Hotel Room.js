function solve(month,days){
    days = Number(days);
    let priceApartment = 0;
    let priceStudio = 0;

    if(month === "May" || month === "October"){
        priceStudio = 50;
        priceApartment = 65;

    }else if(month === "June" || month === "September"){
        priceStudio = 75.20;
        priceApartment = 68.70;

    }else if(month === "July" || month === "August"){
        priceStudio =  76;
        priceApartment = 77;
    }

    if(days > 14){
        priceApartment *= 0.90;
    }
    if(days > 14 && (month === "June" || month === "September")){
        priceStudio *= 0.80;
    }
    if(days > 14 && (month === "May" || month === "October")){
        priceStudio *= 0.70;
    }else if(days > 7 && (month === "May" || month === "October")){
        priceStudio *= 0.95;
    }


    if(month === "May" || month === "October"){
        priceStudio *= days;
        priceApartment *= days;

    }else if(month === "June" || month === "September"){
        priceStudio *= days;
        priceApartment *= days;

    }else if(month === "July" || month === "August"){
        priceStudio *= days;
        priceApartment *= days;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)

}
solve("August",
"20")


;