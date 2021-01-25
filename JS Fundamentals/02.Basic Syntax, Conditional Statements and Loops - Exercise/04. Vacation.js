function solve(people,type,day){
    let price = 0;
    if (day === "Friday") {
        if(type === "Students"){
            price = 8.45 * people;
        }else if(type === "Business"){
           
            if(people >= 100){
                price = 10.90 * (people - 10);
            }else{
                 price = 10.90 * people;
            }
        }else if(type === "Regular"){
            price = 15 * people;
        }
        
    }else if(day === "Saturday"){
        if(type === "Students"){
            price = 9.80 * people;
        }else if(type === "Business"){
            if(people >= 100){
                price = 15.60 * (people - 10);
            }else{
                price = 15.60 * people;
            }
            
        }else if(type === "Regular"){
            price = 20 * people;
        }
    }else if(day === "Sunday"){
        if(type === "Students"){
            price = 10.46 * people;
        }else if(type === "Business"){
            if(people >= 100){
                price = 16 * (people - 10);
            }else{
                price = 16 * people;
            }
            
        }else if(type === "Regular"){
            price = 22.50 * people;
        }
    }

    if(type === "Students"){
        if(people >= 30){
            price *= 0.85;
        }
        
    }else if(type === "Regular"){
        if(people >= 10 && people <= 20){
            price *= 0.95
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);

}
solve(40,
    "Regular",
    "Saturday"
    
    );