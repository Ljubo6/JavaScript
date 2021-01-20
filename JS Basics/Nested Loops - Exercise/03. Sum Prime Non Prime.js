function solve(input){
    let command = input[0];
    let index = 0;
    let primeSum = 0;
    let nonePrimeSum = 0;
    while(command != "stop"){
        let num = +command;
        if(num < 0){
            console.log("Number is negative.");
            index++;
            command = input[index];
            continue;
        }
        let counter = 0;
        for(let i = 0; i <= num ; i++){
            if(num % i === 0){
               counter++; 
            }
            
        }
        if(counter > 2){
            nonePrimeSum += num;
        }else{
            primeSum += num;
        }
        index++;
        command = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonePrimeSum}`);
}
solve(["0",
"-9",
"0",
"stop"])

;