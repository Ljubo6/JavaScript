function solve(name,population,treasury){
    const city = {};
    city.name = name;
    city.population = population;
    city.treasury = treasury;
    return city;
}
function createRecord(name,population,treasury){
    return {
        name,
        population,
        treasury
    };
}
console.log(solve('Tortuga',
7000,
15000
)); 
console.log(createRecord('Tortuga',
7000,
15000
)); 