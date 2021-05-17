function solve(array){
    
    let [town,latitude,longitude] = array.shift().split('|')
    .filter(x => x != '').map(x => x.trim());
    let output = [];
    while (array.length) {
        let [townName,lat,long] = array.shift().split('|')
    .filter(x => x != '').map(x => x.trim());
        lat = Number(Number(lat).toFixed(2));
        long = Number(Number(long).toFixed(2));
        output.push({[town] : townName,[latitude]:lat,[longitude]:long})
    }
    output = JSON.stringify(output);
    return output;
}
console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));