function solve(input) {
    let capitalsPattern = /([# $ % * &])(?<capitals>[A-Z]+)(\1)/g;
    let array = input.shift().split("|");
    let firstPart = array[0];
    let secondPart = array[1];
    let thirdMatchArray = array[2].split(" ");

    let capitalsMatch = firstPart.match(capitalsPattern);
    let capitals = capitalsMatch[0].slice(1, -1);

    let assciiPattern = /\d+\d+:\d+\d+/g;
    let assciiMatch = secondPart.match(assciiPattern);

    let length = {};
    for (let char of capitals) {
        for (let iterator of assciiMatch) {
            let arr = iterator.split(":").map(Number);
            let [charAsscii, stringLength] = arr;
            if (char === String.fromCharCode(charAsscii)) {
                length[char] = stringLength + 1;
            }
        }
    }
    for (let letter in length) {
        for (let word of thirdMatchArray) {
            if (letter === word[0] && length[letter] === word.length) {
                console.log(word);
            }
        }
    }

}
// solve([
//     'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
// ]);
solve(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])
