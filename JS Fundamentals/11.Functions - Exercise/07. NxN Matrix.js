function matrixNxN(n){
    let matrix = [];
    function createMatrix(n,matrix){
        for (let i = 0; i < n; i++) {
            matrix.push([]);
            
        }
        return matrix;
    }
    function fillMatrix(n,matrix){
        createMatrix(n,matrix);
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                matrix[row][col] = n;
                
            }
            
        }
        return matrix;
    }
    
    function printMatrix(n,matrix){
        fillMatrix(n,matrix);
        console.log(matrix.map(row => row.join(" ")).join("\n")); 
    }
    
    let result = printMatrix(n,matrix);

}
matrixNxN(3);
