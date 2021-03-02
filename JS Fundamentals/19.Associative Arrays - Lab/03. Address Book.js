function solve(array){
    let addressBook = {};
    for (let line of array) {
        let[name,address] = line.split(':');
        addressBook[name] = address;
    }
    let sorted = Object.entries(addressBook).sort((a,b) => a[0].localeCompare(b[0]));
    for (let [name,address] of sorted) {
        console.log(`${name} -> ${address}`);
    }

}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);