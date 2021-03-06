function solve(array){
    let parking = {};
    for (let line of array) {
        let [direction,carNumber] = line.split(", ")
        if (direction === "IN") {
            parking[carNumber] = 1;
        }else{
            delete parking[carNumber];
        }

    }
    let sorted = Object.keys(parking)
    .sort((a,b) => a.localeCompare(b));
    if (sorted.length !== 0) {
        return sorted.join("\n");
    }else{
        return "Parking Lot is Empty";
    }
}
console.log(solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
));