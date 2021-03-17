function solve(string){
    let currentStr = "";
    for (let i = 0; i < string.length; i++) {
        if(string[i] !== string[i + 1]){
            currentStr += string[i];
        }    
    }
    console.log(currentStr);
}
solve('aaaaabbbbbcdddeeeedssaa');