function solve(input){
    
    let command = input[0];
    let index = 1;
    let min = 1000000;
    while(command !== "Stop"){
        let num = Number(command);
        if(num < min){
            min = num;
        }

        command = input[index];
        index++;
    }
    console.log(min);
}
solve(["100",
"99",
"80",
"70",
"Stop"])
