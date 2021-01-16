function solve(input){
    let index = 0;
    let steps = 0;
    let isGoingHome = false;
    while(index < input.length){
        if(input[index] !== "Going home"){
            steps += Number(input[index]);
        }else{
            isGoingHome = true;
        }
        

        index++;

    }
    if(isGoingHome && steps < 10000){
        console.log(`${10000 - steps} more steps to reach goal.`)
    }else{
        console.log("Goal reached! Good job!");
        console.log(`${steps - 10000} steps over the goal!`);
    }
}
solve(["125",
"250",
"4000",
"30",
"2678",
"4682"])



;