function charsInRange(a, b) {
    
    let first = a.charCodeAt();
    let second = b.charCodeAt();

    function charsInLine(x, y) {
        let line = '';
        for (let i = x + 1; i < y; i++) {

            line += String.fromCharCode(i) + ' ';
        }
        return line;
    }
    return first > second ? charsInLine(second,first) : charsInLine(first,second)
    
}
let result = charsInRange('a',
'd'
);
console.log(result);