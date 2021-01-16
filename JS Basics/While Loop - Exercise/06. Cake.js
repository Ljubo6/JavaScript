function solve(input) {
    let width = input[0];
    let length = input[1];
    let cake = width * length;
    let index = 2;
    while(input[index] !== "STOP" && cake >= 0){
        let piece = Number(input[index]);
        cake -= piece; 
        index++;
    }
    if(cake >= 0){
        console.log(`${cake} pieces are left.`);
    }else{
       console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`) ;
    }
    
}
solve(["10",
"10",
"20",
"20",
"20",
"20",
"21"])


