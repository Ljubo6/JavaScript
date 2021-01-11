function solve(input){
    input = +input;
    let pow = 2;
    for(let i = 0; i <= input;i++){
        if(i % 2 === 0){
            console.log(Math.pow(pow,i));
        }
    }
}
solve("6")