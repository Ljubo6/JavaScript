function solve(firstArray,secondArray){
    let outputArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            outputArray.push(Number(firstArray[i]) + Number(secondArray[i]));
        }else{
            outputArray.push(firstArray[i] + secondArray[i]);
        }
        
    }
    console.log(outputArray.join(" - "));
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);