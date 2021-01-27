function solve(one,two,three){
    
    let array = [one,two,three];
    let counter = 3;
    let arr = [];
    
    while (counter > 0) {
        let max = Number.MIN_SAFE_INTEGER;
        let maxIndex = -1;
        for (let i = 0; i < array.length; i++) {
            let num = array[i];
            if (num > max ) {
                max = num;
                maxIndex = i;
            }
            
        }
        array.splice(maxIndex,1)
        arr.push(max);
        counter--;
    }
    for (let i = 0; i < arr.length; i++) {
        
       console.log(arr[i]); 
    }
    
}
solve(0,
    0,
    2
    );