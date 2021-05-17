function solve(inputArray){
    let result = [];
    inputArray.map(objectFill);
    return JSON.stringify(result);

    function objectFill(element,index){
        let [name,level,items] = element.split(' / ');
        level = Number(level);
        result.push({name,level,items : []});
        if (items !== undefined) {
            items.split(', ').map(x => result[index].items.push(x));
        }
    }
}
console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));