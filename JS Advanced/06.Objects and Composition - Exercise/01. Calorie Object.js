function solve(array){
    let result = {};
    for (let i = 0; i < array.length; i++) {
        
        if(i % 2 === 0){
            result[array[i]] = Number(array[i + 1]);
        }
    }
    return result;
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));