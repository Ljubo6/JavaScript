function solve(matrix){
    let max = Number.MIN_SAFE_INTEGER;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let current = matrix[row][col];
            if (current > max) {
                max = current;
            }
        }   
    }
    return max;
}
console.log(solve([[20, 50, 10],
    [8, 33, 145]])
   );