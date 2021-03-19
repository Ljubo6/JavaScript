function solve(array){
    let keys = array.shift().split(" ").map(Number);
    let str = array.shift();
    let type = str.split("");
    while (str !== "find") {
        let index = 0;
        for (let i = 0; i < str.length; i++) {
            let assciiCode = str.charCodeAt(i);
            assciiCode -= keys[index];
            index++;
            if (index > keys.length - 1) {
                index = 0;
            }
            
            let char = String.fromCharCode(assciiCode);
            type[i] = char;
        }

        let startType = type.join("").indexOf("&");
        let endType = type.join("").lastIndexOf("&");

        let startCoordinate = type.join("").indexOf("<");
        let endCoordinate = type.join("").lastIndexOf(">");

        let typeTreasure = type.join("").slice(startType + 1,endType);
        let coordinates = type.join("").substring(startCoordinate + 1,endCoordinate);

        console.log(`Found ${typeTreasure} at ${coordinates}`);
        str = array.shift();   
        type = str.split("");
    }
}
solve([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
  ])