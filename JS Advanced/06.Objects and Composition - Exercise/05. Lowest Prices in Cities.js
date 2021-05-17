function solve(input){
    let result = {};
    while(input.length){
        let log = input.shift();
        let [town,product,price] = log.split(' | ');

        price = Number(price);

        if (!result.hasOwnProperty(product)) {
            result[product] = {town,price}
        }

        result[product] = result[product].price <= price ? result[product] : {town,price};


    };
    let arr = [];
    for (const product in result) {
        arr.push(`${product} -> ${result[product].price} (${result[product].town})`);
    }
    return arr.join('\n');
}
console.log(solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
));