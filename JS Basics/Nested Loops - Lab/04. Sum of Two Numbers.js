function solve(input){
    let start = +input[0];
    let end = +input[1];
    let magic = +input[2];
    let isFind = false;
    let counter = 0;
    for(let i = start;i <= end;i++){
        for(let j = start;j <= end;j++){
            let result = i + j;
                counter++;
            if(i + j === magic){
                
                console.log(`Combination N:${counter} (${i} + ${j} = ${result})`);
                isFind = true;
                break;
                

            }
            
        }
        if(isFind){
            break;
        }
    }
    if(!isFind){
        
        console.log(`${counter} combinations - neither equals ${magic}`)
    }
}
solve(["23",
"24",
"20"])
;