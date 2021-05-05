function solve(steps,footprint,speed){
    let wayLength = steps * footprint;
    speed = speed * 1000 / 60;
    let rest = Math.floor(wayLength / 500)

    let time = Math.ceil(((wayLength / speed ) + rest) * 60);

    let hours = Math.floor(time / 3600).toString();
    let minutes = Math.floor(time / 60).toString();
    let seconds = Math.floor(time % 60).toString();
    
    return `${hours.padStart(2,0)}:${minutes.padStart(2,0)}:${seconds}`
}
console.log(solve(4000, 0.60, 5));