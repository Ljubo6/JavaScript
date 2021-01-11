function solve(input){
    let n1 = +input[0];
    let n2 = +input[1];
    let output = "";
    let sum = 0;
    for(i = n1;i <= n2;i++){
        if(i % 9 === 0){
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for(i = n1;i <= n2;i++){
        if(i % 9 === 0){
            console.log(i);
        }
    }

}
solve(["100", "200"]);