function solve(score){
    score = Number(score);
    let bonus = 0;

    if(score > 1000){
        bonus = score * 0.1;
    }else if(score > 100){
        bonus = score * 0.2;
    }else{
        bonus += 5;
    }

    
    if(score % 2 === 0){
        bonus++;
    }else if(score % 10 === 5){
        bonus += 2;
    }


    let sumScores = score + bonus;

    console.log(bonus);
    console.log(sumScores);
}
solve("15875");