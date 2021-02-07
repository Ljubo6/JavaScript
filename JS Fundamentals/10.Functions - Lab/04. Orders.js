function orders(product, quantity) {
    let price = 0;
    switch (product) {
        case "coffee":
            price = 1.50;
            return totalPrice(price, quantity).toFixed(2);
        case "water":
            price = 1.00;
            return totalPrice(price, quantity).toFixed(2);
        case "coke":
            price = 1.40;
            return totalPrice(price, quantity).toFixed(2);
        case "snacks":
            price = 2.00;
            return totalPrice(price, quantity).toFixed(2);
    }

    function totalPrice(price, quantity) {
        return price * quantity;
    }
}
let output = orders("water",
    5
    );
console.log(output);