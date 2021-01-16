function solve(input){
    let width = input[0];
    let length = input[1];
    let height = input[2];

    let volume = width * length * height;
    
    let index = 3;


    let sumBoxes = 0;

    while(input[index] !== "Done" && volume > sumBoxes){

        let boxes = Number(input[index]);
        sumBoxes += boxes;

        index++;
    }
    let boxesLeft = volume - sumBoxes;
    if(boxesLeft < 0){
        console.log(`No more free space! You need ${Math.abs(boxesLeft)} Cubic meters more.`);
    }else{
        console.log(`${boxesLeft} Cubic meters left.`);
    }

}
solve(["10",
"1",
"2",
"4",
"6",
"Done"])

;