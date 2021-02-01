function solve(array){
    let dungeon = array[0].split("|");
    console.log(dungeon);
    let room = [];
    for (let i = 0; i < dungeon.length; i++) {
        let currentRoom = dungeon[i];
         
        
        room = currentRoom.split(" ");
        console.log(room);
        
    }


}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);