function solve(array){
    let words = {};
    for (let i = 0; i < array.length; i++) {
        let counter = 0;
        for (let j = 0; j < array.length; j++) {
            
            if (array[i] === array[j]) {
                counter++;
            }
        }
        words[array[i]] = counter;
    }
    let ordered = Object.entries(words).sort((a,b) => b[1] - a[1]);
    for (const [word,count] of ordered) {
        console.log(`${word} -> ${count} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);