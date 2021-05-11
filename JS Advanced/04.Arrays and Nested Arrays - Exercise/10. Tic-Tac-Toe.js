function solve(input) {
    let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    let countX = 0;
    let countO = 0;

    for (let option of input) {
        let [row, column] = option.split(' ').map(Number);

        if (dashboard[row][column] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        if (countX > countO) {
            dashboard[row][column] = 'O';
            countO++;
        } else {
            dashboard[row][column] = 'X';
            countX++;
        }

        let sumRows = rows(dashboard);
        let sumColumns = columns(dashboard);
        let sumDiagonals = diagonals(dashboard);

        if (sumRows.includes('XXX') || sumColumns.includes('XXX') || sumDiagonals.includes('XXX')) {
            console.log('Player X wins!');
            currentBoard(dashboard);
            break;
        } else if (sumRows.includes('OOO') || sumColumns.includes('OOO') || sumDiagonals.includes('OOO')) {
            console.log('Player O wins!');
            currentBoard(dashboard);
            break;
        }

        if (checkBoard(dashboard)) {
            break;
        }
    }

    function checkBoard(dashboard) {
        let newArray = dashboard.reduce((newArray, currentEl) => {
            return newArray.concat(currentEl)
        }, [])

        if (!newArray.includes(false)) {
            console.log("The game ended! Nobody wins :(");
            currentBoard(dashboard);
            return true;
        }
    }

    function currentBoard(dashboard) {
        for (let el of dashboard) {
            console.log(el.join('\t'));
        }
    }

    function rows(dashboard) {
        let sumRows = [];

        for (let i = 0; i < dashboard.length; i++) { // суми на редовете
            sumRows.push(dashboard[i].reduce((acc, c) => acc + c, ""))
        }
        return sumRows;
    }

    function columns(dashboard) {
        let sumColumns = [];
        for (let i = 0; i < dashboard.length; i++) { // суми на колоните
            let sum = "";
            for (let j = 0; j < dashboard.length; j++) {
                sum += dashboard[j][i];
            }
            sumColumns.push(sum);
        }
        return sumColumns;
    }

    function diagonals(dashboard) {
        let firstSum = "";
        let secondSum = "";
        let result = [];

        for (let i = 0; i < dashboard.length; i++) {
            firstSum += dashboard[i][i];
            secondSum += dashboard[i][dashboard.length - i - 1];
        }

        result.push(firstSum);
        result.push(secondSum);

        return result;
    }

}

solve(
    ["0 1",
    "0 0",
    "0 2", 
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);
solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);