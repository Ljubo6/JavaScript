function solve(matrix) {
    matrix = matrix.map(x => x.split(' ').map(Number));

    let newMatrix = matrix.slice();

    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for (let row = 0; row < matrix.length; row++) {
        leftDiagonal += matrix[row][row];
        rightDiagonal += matrix[row][matrix.length - 1 - row];
    }
    if (leftDiagonal === rightDiagonal) {
        for (let row = 0; row < newMatrix.length; row++) {
           for (let col = 0; col < newMatrix[row].length; col++) {
                if (!isDiagonal(row,col,newMatrix)) {
                    newMatrix[row][col] = rightDiagonal;
                }  
           }   
        }
        printNewMatrix(newMatrix);
    }else{
        printMatrix(matrix);
    }

    function printMatrix(matrix) {
        for (const row of matrix) {
            console.log(row.join(' '));
        }
    }
    function printNewMatrix(newMatrix) {
        for (const row of newMatrix) {
            console.log(row.join(' '));
        }
    }
    function isDiagonal(row,col){
        if(row === col || col === newMatrix[row].length - 1 - row){
            return true;
        }else{
            return false;
        }
    }
}
solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);