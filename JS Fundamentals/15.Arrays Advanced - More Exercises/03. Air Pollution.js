function solve(matrix, array) {
    
    for (let row = 0; row < matrix.length; row++) {
        matrix[row] = split(matrix[row]);

    }
    for (const element of array) {
        let el = element.split(" ");
        let command = el[0];
        if (command === "breeze") {
            let row = el[1];
            for (let i = 0; i < matrix[row].length; i++) {
                
                matrix[row][i] -= 15;
                if (matrix[row][i] < 0) {
                    matrix[row][i] = 0;
                }
            }

        } else if (command === "gale") {
            let col = el[1];
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][col] -= 20;
                if (matrix[i][col] < 0) {
                    matrix[i][col] = 0;
                }

            }

        } else if (command === "smog") {
            let num = Number(el[1]);
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    matrix[i][j] += num;
                }

            }
        }

    }
    let currentArray = [];
    currentArray = pollutedArray(matrix);

    function pollutedArray(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let currentNum = matrix[i][j];
                if (currentNum >= 50) {
                    currentArray.push(`[${i}-${j}]`);
                }
            }
        }
        return currentArray;
    }

    function split(arr) {
        return arr.split(" ").map(Number);
    }

    if (currentArray.length > 0) {
        console.log(`Polluted areas: ${currentArray.join(", ")}`);
    } else {
        console.log("No polluted areas");
    }
}
solve(["5 7 2 14 4",
"21 14 2 5 3",
"3 16 7 42 12",
"2 20 8 39 14",
"7 34 1 10 24"],
["breeze 1", "gale 2", "smog 35"]
);