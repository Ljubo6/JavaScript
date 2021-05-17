function solve(input) {
    function getEngine(power) {
        let engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ].sort((a, b) => a.power - b.power);

        return engines.find(engine => engine.power >= power);
    }
    function getCArriage(type, color) {
        return {
            type,
            color
        }
    }
    function getWheels(wheelSize){
        let size = Math.floor(wheelSize) % 2 === 0 
        ? Math.floor(wheelSize) - 1 
        : Math.floor(wheelSize);
        return Array(4).fill(size,0,4);
    }
    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCArriage(input.carriage, input.color),
        wheels: getWheels(input.wheelsize),
    }
}
console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

));