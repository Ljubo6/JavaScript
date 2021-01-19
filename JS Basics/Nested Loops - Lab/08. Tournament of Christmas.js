function solve(input) {
    let daysTournament = input[0];
    let index = 1;
    let command = input[index];
    let allMoney = 0;
    let allWins = 0;
    let allLose = 0;

    for (let i = 0; i < daysTournament; i++) {

        let savedMoney = 0;
        let losedMoney = 0;
        let money = 0;
        let winGamesCounter = 0;
        let loseGamesCounter = 0;


        while (command !== "Finish") {
            let sport = command;
            index++;
            let statusGame = input[index];

            if (statusGame === "win") {
                money += 20;
                winGamesCounter++;
            } else {
                loseGamesCounter++;
            }






            index++;
            command = input[index];
        }
        allWins += winGamesCounter;
        allLose += loseGamesCounter;

        if (winGamesCounter > loseGamesCounter) {
            money *= 1.1;
        }
        allMoney += money;
        index++;
        command = input[index];
    }
    if (allWins > allLose) {

        allMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${allMoney.toFixed(2)}`);
    }else{
        console.log(`You lost the tournament! Total raised money: ${allMoney.toFixed(2)}`);
    }
        

}
solve(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])
;