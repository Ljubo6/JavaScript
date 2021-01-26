function solve(array){
    let money = 0;
    let dayCounter = 0;
    let bitcoin = 0;
    let firstDay = 0;
    for (let i = 0; i < array.length; i++) {
        dayCounter++;
        let goldAmount = array[i];
        if (dayCounter % 3 === 0) {
            goldAmount *= 0.7;
        }

        let goldLv = goldAmount * 67.51;


        money += goldLv;

        if (money >= 11949.16 ) {
            while (money >= 11949.16) {
                bitcoin++;
                if(bitcoin === 1){
                    firstDay = dayCounter;
                }
                money -= 11949.16;
            }
        }
        
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (firstDay > 0) {
       console.log(`Day of the first purchased bitcoin: ${firstDay}`); 
    }
    
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
solve([3124.15, 504.212, 2511.124]);