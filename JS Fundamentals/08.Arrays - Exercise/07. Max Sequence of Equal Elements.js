function solve(array) {
    let bestSequence = [];
    for (let i = 0; i < array.length; i++) {
        let topArray = [];
        topArray.push(array[i])
        for (let j = i + 1; j < array.length; j++) {
            
            if (array[i] !== array[j]) {
                break;
            }
            topArray.push(array[j]);
        }
        if (topArray.length > 1) {
            if (topArray.length > bestSequence.length) {
                bestSequence = topArray;
            }
        }
    }
    console.log(bestSequence.join(" "));
}
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);