function solve(input){
    let type = typeof(input);
    let result = '';
    let area = 0;
    if (type === 'number') {
        area = Math.PI*Math.pow(input,2);
        result = `${area.toFixed(2)}`
    }else{
        result = `We can not calculate the circle area, because we receive a ${type}.`
    }
    return result;
}
console.log(solve(5));
console.log(solve('name'));