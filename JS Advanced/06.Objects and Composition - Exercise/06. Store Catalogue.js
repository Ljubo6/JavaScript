function solve(input){
    let output = {};
    while (input.length) {
        
        let [product,price] = input.shift().split(' : ');
        let letter = product.charAt(0).toUpperCase();

        if (!output.hasOwnProperty(letter)) {
            output[letter] = [];
        }
        output[letter].push({product,price});
        output[letter].sort((a,b) => (a.product).localeCompare(b.product))

    }
    output = Object.keys(output).sort().reduce((obj,key) => {
        obj[key] = output[key];
        return obj;
    },{});
    let result = [];
    for (const key in output) {
        let strOne = `${key}\n`;
        let strTwo = output[key].map(x => `  ${x.product}: ${x.price}`).join('\n');
        result.push(strOne + strTwo);
    }
    return result.join('\n');

}
console.log(solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
));