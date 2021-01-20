function solve(input){
    let magic = +input[0];
    
    let output = "";
    for(let i = 1111;i <= 9999;i++){
        let isDivide = true;
        let text = i.toString();
        for(let j = 0;j < text.length;j++){
            let num = +text[j];
            let rest = magic % num;
            if(rest !== 0){
                isDivide = false;
            }
        }
        if(isDivide){
            output += i + " ";
        }
    }
    console.log(output)
}
solve(["16"]);