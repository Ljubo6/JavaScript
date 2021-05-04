function solve(inputOne, inputTwo, inputThree) {
    let num = inputOne.length + inputTwo.length + inputThree.length;
    let average = Math.floor(num / 3);
    return `${num}\n${average}`
}
console.log(solve('chocolate', 'ice cream', 'cake'));