function solve(num,...params){
    num = Number(num);
    let result = [];
    for (const iterator of params) {
        switch (iterator) {
            case 'chop': num /= 2;break;
            case 'dice': num = Math.sqrt(num);break;
            case 'spice': num += 1;break;
            case 'bake': num *= 3;break;
            case 'fillet': num *= 0.8;break;

        }
        Number.isInteger(num) === false ? result.push(`${num.toFixed(1)}`) : result.push(`${num}`);
    }
    return result.join('\n');
}
console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));