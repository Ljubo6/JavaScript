function solve(string){
    let array = [];
    let strArray = [];

    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
            array.push(i);
        }
        
    }
    for (let i = 0; i < array.length; i++) {
        let substring = string.substring(array[i],array[i + 1]);
        strArray.push(substring);
    }
    console.log(strArray.join(", "));

}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')