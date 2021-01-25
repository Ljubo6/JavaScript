function solve(n){
    if (n >= 66) {
        console.log("elder");
    } else if (n >= 20) {
        console.log("adult");
    }else if (n >= 14) {
        console.log("teenager");
    }else if (n >= 3) {
        console.log("child");
    }else if (n >= 0){
        console.log("baby");
    }else{
        console.log("out of bounds");
    }
}
solve(20)