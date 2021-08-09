class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {
        for (const product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            if (productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice;
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += Number(productQuantity);
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }
        return this.history.join('\n');

    }
    addToMenu(meal, products, price) {

        if (!this.menu[meal]) {
            this.menu[meal] = {
                products,
                price
            }
            let mealNumber = Object.keys(this.menu).length;
            if (mealNumber === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas`
            } else {
                return `Great idea! Now with the ${meal} we have ${mealNumber} meals in the menu, other ideas?`
            }
        }else{
            return `The ${meal} is already in the our menu, try something different.`
        }


    }
    showTheMenu(){
        let result = [];
        let obj = Object.keys(this.menu).length;
        if (obj > 0) {
            for (const key in this.menu) {
                result.push(`${key} - $ ${this.menu[key].price}`)
            }
            return result.join('\n');
        }else{
            return `Our menu is not ready yet, please come later...`;
        }
        
    }
    makeTheOrder(meal){
        let menus = Object.keys(this.menu);
        if (!menus.includes(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }else{
            if (this.menu[meal].product) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }else{
                let price = this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
            }
        }

         
    }
}

// class Restaurant {
//     constructor(budget) {
//         this.budgetMoney = budget;
//         this.menu = {};
//         this.stockProducts = {};
//         this.history = [];
//     }

//     loadProducts(products) {
//         let result = '';
//         products.forEach((product) => {
//             let [name, quantity, price] = product.split(' ');
//             price = Number(price);
//             quantity = Number(quantity);

//             let added = false;
//             if (this.budgetMoney >= price) {
//                 this.budgetMoney -= price;

//                 if (!this.stockProducts[name]) {
//                     this.stockProducts[name] = 0;
//                 }
//                 this.stockProducts[name] += quantity;
//                 added = true;
//             }

//             if (added) {
//                 const message = `Successfully loaded ${quantity} ${name}`;
//                 result += message + '\n';
//                 this.history.push(message);
//             } else {
//                 const message = `There was not enough money to load ${quantity} ${name}`;
//                 result += message + '\n';
//                 this.history.push(message);
//             }
//         });

//         return result.trim();
//     }

//     addToMenu(meal, products, price) {
//         if (!this.menu[meal]) {
//             this.menu[meal] = {};
//             this.menu[meal].products = products;
//             this.menu[meal].price = price;

//             if (Object.keys(this.menu).length === 1) {
//                 return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
//             } else {
//                 return `Great idea! Now with the ${meal} we have ${
//                     Object.keys(this.menu).length
//                 } meals in the menu, other ideas?`;
//             }
//         }

//         return `The ${meal} is already in the our menu, try something different.`;
//     }

//     showTheMenu() {
//         let result = '';
//         for (const meal in this.menu) {
//             result += `${meal} - $ ${this.menu[meal].price}\n`;
//         }

//         if (!result) {
//             return `Our menu is not ready yet, please come later...`;
//         }
//         return result.trim();
//     }

//     makeTheOrder(meal) {
//         if (!this.menu[meal]) {
//             return `There is not ${meal} yet in our menu, do you want to order something else?`;
//         }

//         for (const product of this.menu[meal].products) {
//             let [name, quantity] = product.split(' ');
//             quantity = Number(quantity);
//             if (!this.stockProducts[name]) {
//                 return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
//             }
//             if (this.stockProducts[name] < quantity) {
//                 return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
//             }
//         }

//         this.menu[meal].products.forEach((product) => {
//             let [name, quantity] = product.split(' ');
//             quantity = Number(quantity);
//             this.stockProducts[name] -= quantity;
//         });
//         this.budgetMoney += this.menu[meal].price;

//         return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
//     }
// }
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
