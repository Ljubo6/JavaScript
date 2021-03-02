function solve(array){
    let map = new Map();
    for (let line of array) {
        let[product,quantity] = line.split(' ');
        if(!map.has(product)) {
            map.set(product,Number(quantity));
        }else{
            let currentQuantity = map.get(product);
            currentQuantity += Number(quantity);
            map.set(product,currentQuantity)
        }
    }
    for (let [product,quantity] of map) {
        console.log(`${product} -> ${quantity}`);
    }
    

}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);