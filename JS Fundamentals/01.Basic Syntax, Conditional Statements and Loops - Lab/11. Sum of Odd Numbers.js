function solve(n){
    let counter = 0;
    let sum = 0;
    for(let i = 1;i <= 100; i++){
        if(i % 2 !== 0 && counter < n){
            console.log(i);
            counter++;
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}
solve(5);