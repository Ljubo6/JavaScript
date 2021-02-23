function solve(array) {
    let products = [];
    array.forEach(x => {
        let [name,price] = x.split(" : ");
        products.push({name : name, price : price});
    });
    products.sort((a,b) => a.name.localeCompare(b.name));
    for (let i = 0; i < products.length; i++) {
        if (i === 0 || products[i].name[0] !== products[i - 1].name[0]) {
            console.log(products[i].name[0]);
        }
        console.log(`  ${products[i].name}: ${products[i].price}`);
        
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);