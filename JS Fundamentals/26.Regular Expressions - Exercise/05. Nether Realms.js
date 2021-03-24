function solve(arr) {
    let demons = {};
    let pattern = /[, ]+/g;
    let array = arr.shift().split(pattern);
    for (let index = 0; index < array.length; index++) {

        let healthSum = 0;
        let damageSum = 0;

        let str = array[index];
        let healthPattern =  /[^\d+\-\*\/\., ]/;

        for (let i = 0; i < str.length; i++) {
            let match = healthPattern.exec(str[i]);
            if (match !== null) {
                healthSum += str.charCodeAt(i);
            }

        }

        demons[str] = {};

        demons[str].health = healthSum;
        let damagePattern = /[+|-]?\d+(\.\d+)?/g;
        let match = str.match(damagePattern);
        if (match !== null) {
            damageSum = match.map(Number).reduce((a, b) => a + b);
        }
        for (let i = 0; i < str.length; i++) {
            let operatorPattern = /[\*\/]/g;
            let match = operatorPattern.exec(str[i]);
            if (match !== null && match[0] === "*") {
                damageSum *= 2;
            } else if (match !== null && match[0] === "/") {
                damageSum /= 2;
            }

        }
        demons[str].damage = damageSum;
    }
    let ordered = Object.entries(demons).sort(([a], [b]) => a.localeCompare(b));
    ordered.forEach(x => {
        let [name, obj] = x;
        console.log(`${name} - ${obj.health} health, ${obj.damage.toFixed(2)} damage`);
    })
}
solve(['M3ph-0.5s-0.5t0.0**']);