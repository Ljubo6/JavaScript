function sorting(array) {
    let sortedArray = [];
    array.sort((a,b) => a - b);
    while (array.length > 0) {
        sortedArray.push(array[array.length - 1]);
        array.pop();
        sortedArray.push(array[0]);
        array.shift();
    }

    console.log(sortedArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);