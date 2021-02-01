function solve(array){
    let dungeon = array[0].split('|');
    let health = 100;
    let coins = 0;
    let isDead = false;
    for (let i = 0; i < dungeon.length; i++) {


        const room = dungeon[i].split(' ');
        
        let items = room[0];
        let n = Number(room[1]);

        if (items === "potion") {
            if(100 - health <= n){
                n = 100 - health;
            }
            health += n;
            console.log(`You healed for ${n} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else if(items === "chest"){
            coins += n;
            console.log(`You found ${n} coins.`);
        }else{
            health -= n;
            if (health > 0) {
                console.log(`You slayed ${items}.`);
            }else{
                isDead = true;
                console.log(`You died! Killed by ${items}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }

        
    }

    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);