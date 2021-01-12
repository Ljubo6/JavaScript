function solve(input){
    let numCount = +input[0];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;


    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for(let i = 1;i < input.length;i++){
        let num = +input[i];
        if(num % 4 === 0){
            count3++;
        }
        if(num % 3 === 0){
            count2++;
        }
        if(num % 2 === 0){
            count1++;
        }
    }

    p1 = count1 / numCount * 100;
    p2 = count2 / numCount * 100;
    p3 = count3 / numCount * 100;


    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);


}
solve(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"]
);