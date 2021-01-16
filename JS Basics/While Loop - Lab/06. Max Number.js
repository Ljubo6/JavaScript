function solve(input){
    
    let command = input[0];
    let index = 1;
    let max = -1000000;
    while(command !== "Stop"){
        let num = Number(command);
        if(num > max){
            max = num;
        }

        command = input[index];
        index++;
    }
    console.log(max);
}
solve(["45",
"-20",
"7",
"99",
"Stop"])


;