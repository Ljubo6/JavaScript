function solve(arr){
    let array = [arr[0][0]];
    let string = arr[0];
    
    for (let i = 0; i < string.length; i++) {
        if (!array.includes(string[i])) {
           array.push(string[i]);
        }
        
    }
    for (let i = 0; i < array.length; i++) {
        let countArray = [];
        for (let j = 0; j < string.length; j++) {
            
            if (array[i] === string[j]) {
                countArray.push(j);
            }
        }
        console.log(`${array[i]}:${countArray.join("/")}`);
    }
}
solve(["avjavamsdmcalsdm"]);