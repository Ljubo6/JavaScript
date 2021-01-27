function solve(string,char,text){
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "_") {
            newString += char;           
        }else{
            newString += string[i];
        }
        
    }
    if (newString === text) {
        console.log("Matched");
    }else{
        console.log("Not Matched")
    }
}
solve('Str_ng', 'I', 'Strong')