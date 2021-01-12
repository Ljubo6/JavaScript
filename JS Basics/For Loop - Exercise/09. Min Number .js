function solve(input){
    let num = input[0];
    let minNum = 1000000;
    for(let i = 1;i < input.length;i++){
        let number = +input[i];
        if(minNum > number){
            minNum = number;
        }
    }
    console.log(minNum);
}
solve(["2",
"-1",
"-2"]

)