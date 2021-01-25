function solve(start,end){
    let sum = 0;
    let text = "";
    for (let i = start; i <= end; i++) {
        
        text += i + " ";
        sum += i;
    }
    console.log(text);
    console.log(`Sum: ${sum}`);
}
solve(5, 10);