function solve(input){
    let num = +input[0];
    let output = 1;
    for(let i = 1;i <= num;i++){
        output *= i;
    }
    console.log(output);
}
solve(["8"]);