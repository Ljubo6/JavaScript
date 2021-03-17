function solve(input){
    input = input.trim();
    let re = /\s+/;
    let array = input.split(re);
    let sum = 0;
    let alphabetLowerCase = [];
    let alphabetUpperCase = [];
    for (let i = 97; i < 123; i++) {
        
        alphabetLowerCase.push(String.fromCharCode(i));
        alphabetUpperCase.push(String.fromCharCode(i).toUpperCase());
    }
    
    for (let element of array) {
        let firstChar = element[0];
        let lastChar = element[element.length -1];
        let num = Number(element.substring(1,element.length - 1));

        if (firstChar.charCodeAt(0) > 64 && firstChar.charCodeAt(0) < 91) {
            num /= alphabetUpperCase.indexOf(firstChar) + 1;
            
        }else if(firstChar.charCodeAt(0) > 96 && firstChar.charCodeAt(0) < 123){
            num *= alphabetLowerCase.indexOf(firstChar) + 1;
        }
        if (lastChar.charCodeAt(0) > 64 && lastChar.charCodeAt(0) < 91) {
            num -= alphabetUpperCase.indexOf(lastChar) + 1;
            
        }else if(lastChar.charCodeAt(0) > 96 && lastChar.charCodeAt(0) < 123){
            num += alphabetLowerCase.indexOf(lastChar) + 1;
        }
        sum += num;
    }
    console.log(sum.toFixed(2));
}
solve(' P34562Z                                q2576f                                 H456z');