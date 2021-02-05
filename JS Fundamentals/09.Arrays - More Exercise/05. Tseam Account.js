function solve(array) {
    let account = array.shift().split(" ");
    let index = 0;
    let command = array.shift();
    while (command != "Play!") {
        let currentArray = command.split(" ");
        let order = currentArray[0];
        let game = currentArray[1];
        
        switch (order) {
            case "Install":
                if(!account.includes(game)){
                    account.push(game);
                }
                break;
            case "Uninstall":
                if(account.includes(game)){
                    let i = account.indexOf(game);
                    account.splice(i,1);
                }
                break;
            case "Update":
                if(account.includes(game)){
                    let i = account.indexOf(game);
                    let removed = account.splice(i,1);
                    account.push(removed[0]);
                }
                break;
            case "Expansion":
                let arr = game.split("-");
                let currentGame = arr[0];
                let expansion = arr[1];
                if(account.includes(currentGame)){
                    let i = account.indexOf(currentGame);
                    let spliced = `${currentGame}:${expansion}`; 
                    account.splice((i + 1),0,spliced);
                }
                break;


        }
        index++;
        command = array.shift();
    }
    console.log(account.join(" "));

}
solve(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']

);