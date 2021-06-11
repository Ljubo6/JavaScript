function solve(array) {
    let output = {};
    let result = {};
    let resultOutput = [];
    for (const line of array) {
        let [fruit, quantity] = line.split(' => ');
        quantity = Number(quantity)
        if (!output[fruit]) {
            output[fruit] = 0;
        }

        output[fruit] += quantity;

        let bottles = 0;
        if (output[fruit] >= 1000) {
            bottles = Math.floor(output[fruit] / 1000);
            output[fruit] %= 1000;
            if (!result[fruit]) {
                result[fruit] = 0;
            }
            result[fruit] += bottles;
        }
    }
    for (const key in result) {
        resultOutput.push(`${key} => ${result[key]}`)
    }
    return resultOutput.join('\n');
}

console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
));