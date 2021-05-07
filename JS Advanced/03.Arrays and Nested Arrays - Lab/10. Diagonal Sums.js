function solve(matrix){
    let result = [];
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                sum += matrix[row][col];
            }
            
        }
        
    }
    result.push(sum);
    sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        sum += matrix[row][matrix[row].length - 1 - row];
        
    }
    result.push(sum);
    sum = 0;
    return result.join(' ');
}
console.log(solve(
    [[3, 5, 17],
     [-1, 7, 14],
     [1, -8, 89]]
   ));