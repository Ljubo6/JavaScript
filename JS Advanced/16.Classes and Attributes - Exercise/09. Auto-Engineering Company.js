function solve(array){
    let result = {};
    let output =[];
    array.forEach(x => {
        let[brand,model,numberCars] = x.split(' | ');
        numberCars = Number(numberCars)
        if (!result[brand]) {
            result[brand] = {};    
        }
        if (!result[brand][model]) {
            result[brand][model] = 0;
        }
        result[brand][model] += numberCars;
    });
    for (const brand in result) {

        output.push(`${brand}`);

        for (const model in result[brand]) {
            output.push(`###${model} -> ${result[brand][model]}`)
        }
    }
    return output.join('\n');
}
console.log(solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
));