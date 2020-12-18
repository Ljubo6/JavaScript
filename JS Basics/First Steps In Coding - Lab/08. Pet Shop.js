function solve(dogs, otherAnimals){
    let countDogs = Number(dogs);
    let countOtherAnimals = Number(otherAnimals);

    let dogsPrice = countDogs * 2.50;
    let otherAnimalsPrice = countOtherAnimals * 4;

    let result= dogsPrice + otherAnimalsPrice;
    console.log(`${result} lv.`);
}
solve("13", "9");