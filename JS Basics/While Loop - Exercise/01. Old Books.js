function solve(input){
    let bookName = input[0];
    let index = 1;
    let bookCount = 0;
    let isFound = false;
    while(input[index] !== "No More Books" && index < input.length){
        
        if(input[index] === bookName){
            isFound = true;
            break;
        }else{
            bookCount++;
        }

        index++;
    }

    if(isFound){
        console.log(`You checked ${bookCount} books and found it.`);
    }else{
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCount} books.`)
    }
}
solve(["Troy",
"Stronger",
"Life Style",
"Troy"])



;