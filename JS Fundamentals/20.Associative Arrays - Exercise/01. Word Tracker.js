function solve(array){
    let words = array.shift().split(' ');
    let wordTracker = {};
    for (let i = 0; i < words.length; i++) {
        let counter = 0;
        for (let j = 0; j < array.length; j++) {
            if(words[i] === array[j]){
                counter++;
            }
            
        }
        wordTracker[words[i]] = counter;
    }
    let sorted = Object.keys(wordTracker).sort((a,b) => wordTracker[b] - wordTracker[a])
    .forEach(el => {
         console.log(`${el} - ${wordTracker[el]}`);
    });
    
}
solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    );