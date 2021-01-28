function solve(firstChar,secondChar,thirdChar){
    let array = [firstChar,secondChar,thirdChar];
    array.reverse();
    let string = "";
    for (let i = 0; i < array.length; i++) {
        
        string += array[i] + " ";
    }
    console.log(string);
}
solve('A',
'B',
'C'
)