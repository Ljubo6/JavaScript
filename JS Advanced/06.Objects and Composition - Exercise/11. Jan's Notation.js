function solve(array) {
    let result = [];
    if (array.length <= 2) {
        return `Error: not enough operands!`;
    }
    function pop(){
        return result.pop();
    }
    let action = {
        '+':(one,two) => result.push(one + two),
        '-':(one,two) => result.push(one - two),
        '*':(one,two) => result.push(one * two),
        '/':(one,two) => result.push(one / two),
    }
    while (array.length){
        let element = array.shift();
        if (Number.isInteger(element)) {
            result.push(element);
        }else{
            if (result.length < 2) {
                return `Error: not enough operands!`
            }else{
                let two = pop();
                let one = pop();
                action[element](one,two);
            }    
        }    
    }
    if (result.length > 1) {
        return `Error: too many operands!`
    } else {
        return result.join('');
    }   
}

console.log(solve([3,
    4,
    '+']
))
console.log(solve([5,
    3,
    4,
    '*',
    '-']

))
console.log(solve([7,
    33,
    8,
    '-']

))
console.log(solve([15,
    '/']

))
console.log(solve([]
))