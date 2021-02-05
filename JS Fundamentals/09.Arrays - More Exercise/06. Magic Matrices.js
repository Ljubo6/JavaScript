function solve(matrix){
    let sumRow = matrix[0].reduce((a,b) => a+b);
    let isMagic = true;
    for (let row = 1; row < matrix.length; row++) {
        let sum =  matrix[row].reduce((a,b) => a+b);
        if (sum !== sumRow) {
            isMagic = false
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let sum = 0;
        for (let row = 0; row < matrix.length; row++) {
            sum += matrix[row][col];
            
        }
        if (sum !== sumRow) {
            isMagic = false;
        }
        
    }
    console.log(isMagic);
}
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
   );