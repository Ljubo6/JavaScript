function solve(n) {
    let array = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    for (let i = 0; i < array.length; i++) {
        if(n >= 1 && n <= 7){
            console.log(array[n - 1]);
            break;
        }else{
            console.log("Invalid day!");
            break;
        }
        
    }
}
solve(5);