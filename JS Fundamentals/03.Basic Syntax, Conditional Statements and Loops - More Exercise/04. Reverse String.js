function solve(str){
    let array = str.split("");
    array.reverse();
    str = array.join("");
    console.log(str);

}
solve("Hello")