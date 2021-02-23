function solve(array){
    array.forEach(x => {
        let[town,latitude,longitude] = x.split(' | ');
        let townObject = {
            town,
            latitude : Number(latitude).toFixed(2),
            longitude : Number(longitude).toFixed(2)
        }
        console.log(townObject);
    });
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);