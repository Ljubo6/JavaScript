function solve(x1,y1,x2,y2){
    let distanceToCenterOne = validityChecker(x1,y1,0,0);
    let distanceToCenterTwo = validityChecker(x2,y2,0,0);
    let distanceBetween = validityChecker(x1,y1,x2,y2);
    let result = '';
    let arr = [];

    Number.isInteger(distanceToCenterOne) ? result =  `{${x1}, ${y1}} to {${0}, ${0}} is valid`: result = `{${x1}, ${y1}} to {${0}, ${0}} is invalid`;
    arr.push(result);
    Number.isInteger(distanceToCenterTwo) ? result =  `{${x2}, ${y2}} to {${0}, ${0}} is valid`: result = `{${x2}, ${y2}} to {${0}, ${0}} is invalid`;
    arr.push(result);
    Number.isInteger(distanceBetween) ? result = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`: result = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    arr.push(result);

    return arr.join('\n');
    
    function validityChecker (x1,y1,x2,y2){
        return Math.sqrt(Math.pow(x1 - x2,2) + Math.pow(y1 - y2,2));
    }
}
console.log(solve(3, 0, 0, 4));
console.log(solve(2, 1, 1, 1));