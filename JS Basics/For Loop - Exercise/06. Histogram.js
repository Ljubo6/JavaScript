function solve(input){
    let numCount = +input[0];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for(let i = 1;i < input.length;i++){
        let num = +input[i];
        if(num >= 800){
            count5++;
        }else if(num >= 600){
            count4++;
        }else if(num >= 400){
            count3++;
        }else if(num >= 200){
            count2++;
        }else{
            count1++;
        }
    }

    p1 = count1 / numCount * 100;
    p2 = count2 / numCount * 100;
    p3 = count3 / numCount * 100;
    p4 = count4 / numCount * 100;
    p5 = count5 / numCount * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}
solve(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"]

);