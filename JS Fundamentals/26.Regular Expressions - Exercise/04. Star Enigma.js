function solve(array){
    let n = Number(array.shift());
    let attackedPlanets = {};
    let destroyedPlanets = {};
    for (let i = 0; i < n; i++) {
        let str = array.shift();
        let key = encriptKey(str);
        let encriptedStr = encript(str,key);
        let pattern = /([^@,\-!:>]*)@(?<name>[A-Za-z]+)([^@,\-!:>]*):(?<population>\d+)([^@,\-!:>]*)!(?<type>[AD])!([^@,\-!:>]*)->(?<count>\d+)([^@,\-!:>]*)/;
        let match = pattern.exec(encriptedStr);
        if (match !== null) {
            let name = match.groups.name;
            let type = match.groups.type;
            if (type === "A") {
                if (!attackedPlanets.hasOwnProperty(name)) {
                    attackedPlanets[name] = 0;
                }
                attackedPlanets[name]++;
            }else if(type === "D"){
                if (!destroyedPlanets.hasOwnProperty(name)) {
                    destroyedPlanets[name] = 0;
                }
                destroyedPlanets[name]++;
            }
        }
    }
    let orderedAttackedPlanets = Object.keys(attackedPlanets).sort((a,b) => a.localeCompare(b));
    let orderedDestroyedPlanets = Object.keys(destroyedPlanets).sort((a,b) => a.localeCompare(b));
    let attackedCount = Object.values(attackedPlanets);
    if (attackedCount.length !== 0) {
        attackedCount = attackedCount.reduce((a,b) => a + b);
    }else{
        attackedCount = 0;
    }
    let destroyedCount = Object.values(destroyedPlanets);
    if (destroyedCount.length !== 0) {
        destroyedCount = destroyedCount.reduce((a,b) => a + b);
    }else{
        destroyedCount = 0;
    }

    console.log(`Attacked planets: ${attackedCount}`);
    orderedAttackedPlanets.forEach(x => {
        console.log(`-> ${x}`);
    });
    console.log(`Destroyed planets: ${destroyedCount}`);
    orderedDestroyedPlanets.forEach(x => {
        console.log(`-> ${x}`);
    });

    
    function encriptKey(str){
        let arr = ["s", "t", "a", "r"];
        str = str.toLowerCase();
        let count = 0;
        for (let iterator of str) {
            if (arr.includes(iterator)) {
                count++;
            }
        }
        return count;
    }
    function encript(str,key){
        let arr = str.split("");
        for (let i = 0; i < arr.length; i++) {
            let char = arr[i];
            let charNum = str.charCodeAt(i);
            arr[i] = String.fromCharCode(charNum - key);
            
        }
        return arr.join("");
    }
}
solve([ '2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR' ]);
solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
  ]);