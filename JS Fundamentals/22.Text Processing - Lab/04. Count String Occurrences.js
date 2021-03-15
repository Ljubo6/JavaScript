function solve(string,word){
    let array = string.split(" ");
    let counter = 0;
    for (let iterator of array) {
        if (iterator === word) {
            counter++;
        }
    }
    console.log(counter);
}
solve("This is a word and it also is a sentence",
"is"
)