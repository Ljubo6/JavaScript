function solve(array){
    let pattern = /\+359([ -])2(\1)\d{3}(\1)\d{4}\b/g;
    let phones = [];
    let match = pattern.exec(array)
    while (match !== null) {
        phones.push(match[0]);
        match = pattern.exec(array)
    }
    console.log(phones.join(", "));
}
solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
]);