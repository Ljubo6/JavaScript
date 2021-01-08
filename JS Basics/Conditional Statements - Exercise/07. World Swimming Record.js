function solve(record,distance,swimDistancePerSecond){
    record = +record;
    distance = +distance;
    swimDistancePerSecond = +swimDistancePerSecond;

    let timeToSwim = distance * swimDistancePerSecond;

    let additionalTime = Math.floor(distance / 15) * 12.5;
    let allTime = timeToSwim + additionalTime;

    if(record <= allTime){
        let rest = allTime - record;
        console.log(`No, he failed! He was ${rest.toFixed(2)} seconds slower.`)
    }else{
        console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`)
    }

}
solve("55555.67",
"3017",
"5.03")

;