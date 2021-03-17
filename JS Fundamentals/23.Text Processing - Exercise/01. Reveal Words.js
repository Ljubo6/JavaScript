function solve(words, string) {
    let array = words.split(', ');
    let strArray = string.split(" ");
    for (let iterator of array) {
        
        for (let i = 0; i < strArray.length; i++) {
            if(strArray[i].includes("*")){
                let counter = strArray[i].length;
                if (counter === iterator.length) {
                    strArray[i] = iterator;
                }
            }

        }
    }
    console.log(strArray.join(" "));

}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)