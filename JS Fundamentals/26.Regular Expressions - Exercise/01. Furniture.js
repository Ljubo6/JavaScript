function solve(array){
    let furniture = array.shift();
    let totalMoney = 0;
    console.log("Bought furniture:");
    while (furniture !== "Purchase") {
        let pattern = />>(?<name>[A-Z]([A-Z])?([a-z]+)?)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;
        let match = pattern.exec(furniture);
        if(match !== null){
            let name = match.groups.name;
            let price = Number(match.groups.price);
            let quantity = Number(match.groups.quantity);
            totalMoney += price * quantity;
            console.log(name);
        }

        furniture = array.shift();
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ])