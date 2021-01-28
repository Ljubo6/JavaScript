function solve(lostFightCount,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let trashedArmor = 0;
    let countTrashedShield = 0;

    for (let i = 1; i <= lostFightCount; i++) {
        if (i % 2 === 0) {
            trashedHelmet++;
        }
        if(i % 3 === 0){
            trashedSword++;
        }
        if(i % 2 === 0 && i % 3 === 0){
            trashedShield++;
            countTrashedShield++;
            
        }
        if (i % 2 === 0 && i % 3 === 0 & countTrashedShield === 2) {
            trashedArmor++;
            countTrashedShield = 0;
        }

        
    }
    let expenses = trashedHelmet * helmetPrice 
                    + trashedSword * swordPrice 
                    + trashedShield * shieldPrice 
                    + trashedArmor * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(23,
    12.50,
    21.50,
    40,
    200
    
    );