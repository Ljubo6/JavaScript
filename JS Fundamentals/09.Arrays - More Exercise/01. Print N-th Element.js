function solve(array){
    let step = Number(array.pop());
    let current = [];
    for (let i = 0; i < array.length; i += step) {
        let element = array[i];
        current.push(element);
    }
    console.log(current.join(" "));
}
solve(['5', '20', '31', '4', '20', '2']);