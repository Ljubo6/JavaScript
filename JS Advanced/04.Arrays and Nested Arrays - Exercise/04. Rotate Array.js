function solve(array,num){
    for (let i = 0; i < num; i++) {
        
        let current = array.pop();
        array.unshift(current);
    }
    return array.join(' ');
}
console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));