function solve(matrix){
    let sumRows = [];
    let sumCols = [];
    for (let row = 0; row < matrix.length; row++) {
        let sum = matrix[row].reduce((a,b) => a + b,0);
        sumRows.push(sum);
    }
    for (let row = 0; row < matrix.length; row++) {
        let sum = 0;
        for (let col = 0; col < matrix.length; col++) {
            sum += matrix[col][row];
        }
        sumCols.push(sum);
    }
    let isMagic = true;
    for (const row of sumRows) {
        for (const col of sumCols) {
            if (row !== col) {
                isMagic = false;
                break;
            }
        }
    }
    return isMagic;
}
console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));