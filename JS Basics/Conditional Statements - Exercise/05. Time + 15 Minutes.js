function solve(hours,mins){
    hours = Number(hours);
    mins = Number(mins);

    let sec = hours * 3600 + mins * 60 + 15 * 60;

    hours = Math.floor(sec / 3600);
    mins = (sec % 3600) / 60;
    if(hours === 24){
        hours = 0;
    }
    if(mins < 10){
       console.log(`${hours}:0${mins}`); 
    }else{
        console.log(`${hours}:${mins}`); 
    }
    
}
solve("23", "59");