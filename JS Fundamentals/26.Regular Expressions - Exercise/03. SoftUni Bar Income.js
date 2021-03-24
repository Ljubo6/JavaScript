function solve(array){
    let income = 0;
    let str = array.shift();
    while (str !== "end of shift") {
        let pattern = /%(?<customerName>[A-Z][a-z]+)%([^\|\$\.%]+)?<(?<product>[\w]+)>([^\|\$\.%]+)?\|(?<quantity>\d+)\|([^\|\$\.%\d]+)?(?<price>\d+(\.\d+)?)\$/g;
        let match = pattern.exec(str);
        if (match !== null) {
            let totalPrice = Number(match.groups.quantity) * Number(match.groups.price);
            income += totalPrice;
            console.log(`${match.groups.customerName}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        }
        str = array.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);
    
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])