function solve() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipies = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    function robot(command) {
        const [action, ...others] = command.split(' ');

        let actions = {
            restock: (...array) => {
                let [microelement, quantity] = array;
                quantity = Number(quantity);
                if (quantity > 0) {
                    stock[microelement] += quantity;
                    return 'Success';
                }
            },

            prepare: (...array) => {
                let [recipe, quantity] = array;
                quantity = Number(quantity);

                let required = Object.keys(recipies[recipe]);
                let result = 'Success';

                for (let key of required) {
                    if (stock[key] < recipies[recipe][key] * quantity) {
                        result = `Error: not enough ${key} in stock`
                        break;
                    } else {
                        stock[key] -= recipies[recipe][key] * quantity;
                    }
                }

                return result;
            },

            report: () => {
                let toReport = Object.keys(stock);
                let result = toReport.map(el => `${el}=${stock[el]}`);

                return result.join(' ');
            }


        }

        return actions[action](...others);

    }
    return robot;
}

let manager = solve();
manager("restock carbohydrate 10");
manager("restock flavour 10");
manager("prepare apple 1");
manager("restock fat 10");
manager("prepare burger 1");
manager("report"); 
