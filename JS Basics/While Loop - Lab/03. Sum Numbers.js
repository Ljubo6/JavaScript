function solve(input){
    let num = Number(input[0]);
    let index = 1;
    let sum = 0;
    while(sum < num){
        sum += Number(input[index++]);
    }
    console.log(sum);
}
solve(["100",
"10",
"20",
"30",
"40"])
;