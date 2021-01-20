function solve(input){
    let n = +input[0];
    let number = 1;
    let isFind = false;
    for(let i = 1;i <= n;i++){
        let row = "";
        for(let j = 1;j <= i;j++){
            row += number + " ";
            
            number++;

            if(number === n + 1){
                isFind = true;
                break;
                
            }

        }

        console.log(row);
        if(isFind){
            break;
        }
    }
}
solve(["15"]);