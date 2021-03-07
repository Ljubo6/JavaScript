function solve(array) {
    let map = new Map();
    for (const line of array) {
        
        let [garage ,car] = line.split(' - ');
        car = car.split(': ').join(' - ');
        if (!map.has(garage)) {
            map.set(garage,[]);
        }

        map.get(garage).push(car);
        
         
    }
    let obj = Array.from(map.entries()).sort((a,b) => a[0] - b[0]);
    for (let key of obj) {
        console.log(`Garage № ${key[0]}`);
        key[1].forEach(element => {
            console.log(`--- ${element}`);
        });
    }
}
solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);