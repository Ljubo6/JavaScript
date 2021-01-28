function solve(sideOne,sideTwo,sideThree){
    let s = (sideOne + sideTwo + sideThree) / 2;
    let A = Math.sqrt(s*(s - sideOne)*(s - sideTwo)*(s - sideThree));
    console.log(A);
}
solve(2,
    3.5,
    4
    );