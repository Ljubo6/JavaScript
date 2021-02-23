function solve(stock, order){
    let shop = [];
    for (let i = 0; i < stock.length - 1; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);
        shop[product] = quantity;
        
    }
    for (let i = 0; i < order.length - 1; i += 2) {
        let product = order[i];
        let quantity = Number(order[i + 1]);
        if (shop.hasOwnProperty(product)) {
            shop[product] += quantity;
        }else{
            shop[product] = quantity;
        }
    }
    Object.keys(shop).forEach(x => console.log((`${x} -> ${shop[x]}`)))
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );