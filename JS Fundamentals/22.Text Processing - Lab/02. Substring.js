function solve(str,start,end){
    start = Number(start);
    end = Number(end);
    let result = str.substring(start,end + start);
    console.log(result);
}
solve("ASentance", 1, 8)