function solve(input){
    let firstYear = +input[0];
    let lastYear = +input[1];
    for(let i = firstYear;i <= lastYear;i += 4){
        console.log(i);
    }
}
solve(["2000",
"2011"]

);