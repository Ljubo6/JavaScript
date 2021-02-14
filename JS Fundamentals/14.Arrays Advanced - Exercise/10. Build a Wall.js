function buildWall(array){
    let currentArray = [];
    let concretePerDay = 195;
    let sum = array.reduce((a, b) => a + b);
    while(sum < array.length * 30){
        let cubicYards = 0;
        
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 30) {
                cubicYards += concretePerDay;
                array[i]++;
            }else{
                continue;
            }
        }
        currentArray.push(cubicYards);
        sum = array.reduce((a, b) => a + b);
    }
    let sumConcrete = currentArray.reduce((a, b) => a + b);
    let price = sumConcrete * 1900;
    console.log(currentArray.join(", "));
    console.log(`${price} pesos`);
    
}
buildWall([17, 22, 17, 19, 17]);