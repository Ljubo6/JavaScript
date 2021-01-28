function solve(n){

    let array = n.split("");
    array.reverse();
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element == '1') {
            num += Math.pow(2,i);
        }
        
    }
    console.log(num);

}
solve("11110000");