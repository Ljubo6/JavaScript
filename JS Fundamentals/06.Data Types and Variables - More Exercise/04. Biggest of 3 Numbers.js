function solve(one, two, three) {

    let array = [one, two, three];
    let max = Number.MIN_SAFE_INTEGER;
    let maxIndex = -1;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num > max) {
            max = num;
        }

    }
    console.log(max);

}
solve(-2,
    7,
    3

);