function solve(input) {
    let concatString = input[0] + input[1];
    let word = input[2];
    let vowels = ["a", "e", "i", "o","u"];
    let index = 0;
    for (let i = 0; i < concatString.length; i++) {
        if (vowels.includes(concatString[i])) {
            concatString = concatString.replace(concatString[i], word[index].toUpperCase());
            index++;
            if (index >= word.length ) {
                index = 0;
            }
        }
    }
    concatString = concatString.split("").reverse().join("");
    console.log(`Your generated password is ${concatString}`);
}
solve([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]
    
);