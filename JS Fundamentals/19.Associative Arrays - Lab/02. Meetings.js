function solve(array){
    let meeting = {};
    for (const line of array) {
        let[day,name] = line.split(' ');
        if(!meeting.hasOwnProperty(day)){
            meeting[day] = name;
            console.log(`Scheduled for ${day}`);
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }
    for (const key in meeting) {
        console.log(`${key} -> ${meeting[key]}`);
    }
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)