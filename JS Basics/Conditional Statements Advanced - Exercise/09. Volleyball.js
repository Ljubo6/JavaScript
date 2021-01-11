function solve(input){
    let yearType = input[0];
    let hollidays = +input[1];
    let weekends = +input[2];

    let weekendsInSofia = 48 - weekends;

    let saturdayGamesInSofia = weekendsInSofia * 3 / 4;
    let sundaysGamesInHomeTown = weekends;

    let hollidayGamesInSofia = hollidays * 2 / 3;

    let allGames = saturdayGamesInSofia + sundaysGamesInHomeTown + hollidayGamesInSofia;


    if(yearType === "leap"){
        allGames += allGames * 0.15;
    }
    console.log(Math.floor(allGames));
}
solve(["normal",
"6",
"13"])





