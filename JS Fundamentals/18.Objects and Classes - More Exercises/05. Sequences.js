  
function sequences(input) {
    input = input.map(x => JSON.parse(x));
    let arrayUnique = [];
    
    input.forEach(x => {
        x.sort((a, b) => b - a);
        
        if (!JSON.stringify(arrayUnique).includes(JSON.stringify(x))) {
            arrayUnique.push(x);
        }
    });

    arrayUnique.sort((a, b) => a.length - b.length)
        .forEach(x => {
            console.log(`[${x.join(', ')}]`);
        });
}

sequences([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
]);