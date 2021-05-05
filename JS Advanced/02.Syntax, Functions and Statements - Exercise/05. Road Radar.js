function solve(speed,place){
    let speedRules = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }


    if (speed <= speedRules[place]) {
        return `Driving ${speed} km/h in a ${speedRules[place]} zone`;
    }else{
        let status = '';
        if (speed - speedRules[place] <= 20) {
           status = 'speeding';
        }else if(speed - speedRules[place] <= 40){
            status = 'excessive speeding';
        }else{
            status = 'reckless driving';
        } 
        return `The speed is ${speed - speedRules[place]} km/h faster than the allowed speed of ${speedRules[place]} - ${status}` 
    }
}
console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));