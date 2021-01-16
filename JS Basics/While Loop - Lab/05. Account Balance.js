function solve(input){
    let command = input[0];
    let sum = 0;
    let index = 1;
    while(command !== "NoMoreMoney"){
        let num = Number(command);
        if(num < 0){
            console.log("Invalid operation!");
            break;
        }else{
             sum += num;
             console.log(`Increase: ${num.toFixed(2)}`)
        }
       command = input[index++];
    }
    console.log(`Total: ${sum.toFixed(2)}`)
}
solve(["120",
"45.55",
"-150"])

;