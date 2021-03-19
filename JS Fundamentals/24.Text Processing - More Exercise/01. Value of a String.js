function solve(input){
    let string = input.shift();
    let command = input.shift();
    let lowerSum = 0;
    let upperSum = 0;
    if (command === "LOWERCASE") {
        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
                lowerSum += string.charCodeAt(i);
            }
            
        }
        console.log(`The total sum is: ${lowerSum}`);
    }else if(command === "UPPERCASE"){
        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
                upperSum += string.charCodeAt(i);
            }
            
        }
        console.log(`The total sum is: ${upperSum}`);
    }
    
}
solve(
    [ 'HelloFromMyAwesomePROGRAM', 'LOWERCASE', '' ]
    );