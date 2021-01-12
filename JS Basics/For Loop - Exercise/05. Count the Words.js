function solve(input){
    let words = input[0];
    let count = 0;
    for(let i = 0;i < words.length;i++){
        if(words[i] === " "){
            count++;
        }
    }
    if((count + 1) > 10){
        console.log(`The message is too long to be send! Has ${count + 1} words.`);
    }else{
        console.log("The message was send successfully!")
    }

}
solve(["This message has exactly eleven words. One more as it's allowed!"]);