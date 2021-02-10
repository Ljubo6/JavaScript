function carWash(array) {

    return `The car is ${resultPercentValue(array).toFixed(2)}% clean.`;

    function resultPercentValue(array) {
        let value = 0; 
        let soap = x => x + 10;
        let water = x => x + x * 0.2;
        let vacuum = x => x + x * 0.25;
        let mud = x => x - x * 0.10; 
        for (let i = 0; i < array.length; i++) {
            
            switch (array[i]) {
                case "soap":
                    value = soap(value);
                    break;
                case "water":
                    value = water(value)
                    break;
                case "vacuum cleaner":
                    value = vacuum(value)
                    break;
                case "mud":
                    value = mud(value)
                    break;
            }
        }
        return value;

    }


}
let result = carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
console.log(result);