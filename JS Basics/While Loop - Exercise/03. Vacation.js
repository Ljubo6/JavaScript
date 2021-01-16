function solve(input){
    let moneyForHolliday = Number(input[0]);
    let onlineMoney = Number(input[1]);
    let index = 2;
    let spendCounter = 0;
    let counter = 0;
    while(onlineMoney < moneyForHolliday){
        let command = input[index];
        index++;
        let money = Number(input[index]);
        counter++;
        if(command === "spend"){
            onlineMoney -= money;
            spendCounter++;
        }else if(command === "save"){
            onlineMoney += money;
            spendCounter = 0;
        }

        if(onlineMoney < 0){
            onlineMoney = 0;
        }

        if(spendCounter === 5){
            console.log(`You can't save the money.`);
            console.log(counter);
            return;
        }
        index++;
    }

    console.log(`You saved the money for ${counter} days.`)



}
solve(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])

;