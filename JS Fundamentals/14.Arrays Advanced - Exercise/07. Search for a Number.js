function solve(array,manipulator){
    let getElement = manipulator[0];
    let elementToRemove = manipulator[1];
    let searchElement = manipulator[2];

    let newArray = array.slice(0,getElement);
    newArray.splice(0,elementToRemove);
    let counter = 0;
    for (const n of newArray) {
        if (n === searchElement) {
            counter++;
        }
    }
    console.log(`Number ${searchElement} occurs ${counter} times.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );