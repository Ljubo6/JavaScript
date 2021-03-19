function solve(array){
    let first = array.shift();
    let firstNum = first.charCodeAt(first[0]);
    
    let sum = 0;
    
    let last = array.shift();
    let lastNum = last.charCodeAt(first[0]);

    let min = Math.min(firstNum,lastNum);
    let max = Math.max(firstNum,lastNum);
    let string = array.shift();
    for (let i = 0; i < string.length; i++) {
        if(string.charCodeAt(i) > min && string.charCodeAt(i) < max){
            sum += string.charCodeAt(i);
        }
        
    }
    console.log(sum);
}
solve([ 'a', '1', 'jfe392$#@j24ui9ne#@$' ]);