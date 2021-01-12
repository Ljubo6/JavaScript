function solve(input){
    let num = +input[0];

    for(let i = 1;i <= 10;i++){
        let output = i * num;
        console.log(`${i} * ${num} = ${output}`)
    }
}
solve(["5"]);