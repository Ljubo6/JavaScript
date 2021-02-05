function solve(matrix) {
    matrix = matrix.map(row => row.split(" ").map(Number));
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        firstDiagonalSum += matrix[row][row];
        secondDiagonalSum += matrix[row][matrix[row].length - 1 - row];

    }
    if (firstDiagonalSum === secondDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row === col || row + col + 1 === matrix.length) {
                    continue;
                }
                matrix[row][col] = firstDiagonalSum;

            }

        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}
solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);