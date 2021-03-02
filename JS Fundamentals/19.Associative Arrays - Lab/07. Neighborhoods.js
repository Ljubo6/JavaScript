function solve(array){
    let neighborhoods = array.shift().split(', ');
    let map = new Map();
    for (let neighborhood of neighborhoods) {
        map.set(neighborhood,[])
    }
    for (let line of array) {
        let [neighborhood,person] = line.split(" - ");
        if (neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    }
    let sorted = Array.from(map).sort((a,b) => b[1].length - a[1].length );
    for (let [kvp,arr] of sorted) {
        console.log(`${kvp}: ${arr.length}`);
        for (let el of arr) {
            console.log(`--${el}`);
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
);