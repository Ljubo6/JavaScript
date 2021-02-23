function solve(array){
    let heroes = [];
    for (let line of array) {
        let hero = {};
        let[name,level,items] = line.split(" / ");
        hero.name = name;
        hero.level = Number(level);
        hero.items = items.split(', ').sort().join(', ');
        heroes.push(hero);
    }
    heroes.sort((a,b) => a.level - b.level)
    .forEach(x => {
        console.log(`Hero: ${x.name}`);
        console.log(`level => ${x.level}`);
        console.log(`items => ${x.items}`);
    })
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    );