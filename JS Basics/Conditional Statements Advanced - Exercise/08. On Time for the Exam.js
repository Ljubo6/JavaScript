function solve(examHour,examMinutes,arriveHour,arriveMinutes){
    examHour = +examHour;
    examMinutes = +examMinutes;
    arriveHour = +arriveHour;
    arriveMinutes = +arriveMinutes;

    let status = "";

    let exam = examHour * 3600 + examMinutes * 60;
    let arrive = arriveHour * 3600 + arriveMinutes * 60;

    if(exam === arrive || (exam != arrive && ((exam - arrive) <= 1800)) ){
        status = "On time";
    }else if(exam < arrive){
        status = "Late";
    }else if((exam - arrive) > 1800){
        status = "Early";
    }

    let timeHour = 0;
    let timeMinutes = 0;
    let time = 0;

    if(status === "Late"){

        console.log(`${status}`);

        time = arrive - exam;
        let timeHour = Math.floor(time / 3600);
        let timeMinutes = (time % 3600) / 60;
        
        if(timeHour > 0){
            if(timeMinutes < 10){
                console.log(`${timeHour}:0${timeMinutes} hours after the start`);
            }else{
               console.log(`${timeHour}:${timeMinutes} hours after the start`); 
            }
            
            
        }else{
            console.log(`${timeMinutes} minutes after the start`);
        }
    }else if(status === "Early"){
        console.log(`${status}`);
        time = exam - arrive;
        let timeHour = Math.floor(time / 3600);
        let timeMinutes = (time % 3600) / 60;
        
        if(timeHour > 0){
            if(timeMinutes < 10){
                console.log(`${timeHour}:0${timeMinutes} hours before the start`);
            }else{
                console.log(`${timeHour}:${timeMinutes} hours before the start`);
            }    
        }else{
            console.log(`${timeMinutes} minutes before the start`);
        }
    }else if(status === "On time"){
        if(exam === arrive){
            console.log(`${status}`);
        }else{
            
            time = exam - arrive;
            let timeHour = Math.floor(time / 3600);
            let timeMinutes = (time % 3600) / 60;
            console.log(`${status}`);
            console.log(`${timeMinutes} minutes before the start`)
        }
    }
}
solve("10",
"00",
"10",
"00")


