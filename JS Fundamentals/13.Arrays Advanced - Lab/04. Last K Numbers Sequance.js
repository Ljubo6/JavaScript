function solve(number,step){
    let array = [1];
     
    for (let i = 1; i < number; i++) {
        
        let startIndex = Math.max(0,i - step);
        let sum = array.slice(startIndex,startIndex + step).reduce((a,b) => a + b,0);
        
        array.push(sum);
    }
    console.log(array.join(" "));
}
solve(6, 3);