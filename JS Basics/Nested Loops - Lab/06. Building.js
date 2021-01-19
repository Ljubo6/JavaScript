function solve(input){
    let floorsNum = +input[0];
    let roomsNum = +input[1];
    
    for(let i = floorsNum; i > 0 ; i--){
        let room = "";
        for(let j = 0; j < roomsNum; j++){
            if(i === floorsNum){
                room += `L${i}${j}` + " ";
            }else{
                if (i % 2 === 0) {
                    room += `O${i}${j}` + " ";

                } else {
                    room += `A${i}${j}` + " ";
                }
            }
            
        }
        console.log(room);
    }
}
solve(["6", "4"]);