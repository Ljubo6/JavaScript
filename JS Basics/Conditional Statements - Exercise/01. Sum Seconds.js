function solve(timeOne,timeTwo,timeThree){
    timeOne = Number(timeOne);
    timeTwo = Number(timeTwo);
    timeThree = Number(timeThree);
    let sum = timeOne + timeTwo + timeThree;

    let min = Math.floor(sum / 60);
    let sec = sum % 60;

    if(sec <10){
        console.log(`${min}:0${sec}`);
    }else{
        console.log(`${min}:${sec}`);
    }

}
solve("22", "7", "34");