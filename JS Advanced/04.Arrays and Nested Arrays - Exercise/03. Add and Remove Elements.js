function solve(array){
    let result = [];
    let num = 1;
    let command = array.shift();
    while (command) {
        if (command === 'add') {
            result.push(num) ;           
        }else if(command === 'remove'){
            result.pop();
        }
        num++;
        command = array.shift();
    }
    return result.length !== 0 ? result.join('\n') : "Empty";
}
console.log(solve(['add', 
'add', 
'add', 
'add']
));
console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']

));
console.log(solve(['remove', 
'remove', 
'remove']

));