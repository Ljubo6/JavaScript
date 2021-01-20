function solve(input){
    let first = +input[0];
    let second = +input[1];

    let text = "";
    for(let i = first ;i <= second; i++){
        let string = i.toString();
        let sumEven = 0;
        let sumOdd = 0;
        for(let j = 0;j < string.length;j++){
            let num = +string[j];
            if(j % 2 === 0){
                sumEven += num;
            }else{
                sumOdd += num;
            }

        }
        if(sumEven === sumOdd){
            text += string + " ";
        }
    }
    console.log(text);
}
solve(["100000",
"100050"])
;