function solve(array) {
    let names = array.shift().split(", ");
    let patternAlphabet = /[A-Za-z]/;
    let patternNumber = /\d/;
    let persons = {};
    let str = array.shift();
    while (str !== "end of race") {
        let person = "";
        let distance = 0;
        for (let iterator of str) {
            let matchAlphabet = patternAlphabet.exec(iterator);
            let matchNumber = patternNumber.exec(iterator)
            if (matchAlphabet !== null) {
                person += matchAlphabet[0];
            }
            if (matchNumber !== null) {
                distance += Number(matchNumber[0]);
            }
        }
        if (names.includes(person)) {
            if (!persons.hasOwnProperty(person)) {
                persons[person] = 0;
            }
            persons[person] += distance;
        }
        str = array.shift();
    }
    let ordered = Object.entries(persons).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${ordered[0][0]}`);
    console.log(`2nd place: ${ordered[1][0]}`);
    console.log(`3rd place: ${ordered[2][0]}`);
}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);