function solve(input){
    let destination = input[0];
    
    let index = 1;
    while(destination != "End"){
        let budget = +input[index];
        index++;
        let sum = 0;
        for(let saveMoney = 0;saveMoney < budget;saveMoney += sum ){
            sum = +input[index];
            index++;
        }
        console.log(`Going to ${destination}!`);
        destination = input[index];
        index++;

    }
}
solve(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

;