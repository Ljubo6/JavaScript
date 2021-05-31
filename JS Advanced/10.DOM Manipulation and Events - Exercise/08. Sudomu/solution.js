function solve() {
    const tbodyRef = document.querySelectorAll('tbody>tr');
    const buttons = document.querySelectorAll('button');
    const tableRef = document.querySelector('table');
    const result = document.getElementById('check');

    buttons[0].addEventListener('click', check);
    buttons[1].addEventListener('click', clear);

    function check(ev) {
        let isCorrect = true;
        const rows = Array.from(tbodyRef);

        for (let i = 0; i < rows.length; i++) {
            const cells = Array.from(rows[i].children);
            for (let j = 0; j < cells.length; j++) {
                let toCheck = Number(cells[j].firstElementChild.value);
                console.log(cells[j].firstElementChild);
                if (toCheck < 1 || toCheck > 3) {
                    isCorrect = false;
                    break;
                }
                for (let k = 0; k < cells.length; k++) { //проверявам клетките по редове
                    if (toCheck === Number(cells[k].firstElementChild.value) && j !== k) {
                        isCorrect = false;
                        break;
                    }

                }

                for (let l = 0; l < cells.length; l++) { // проверявам клетките по колони
                    if (toCheck === Number(rows[l].children[j].firstElementChild.value) && l !== i) {
                        isCorrect = false;
                        break;
                    }
                }
                if (isCorrect === false) {
                    break;
                }
            }
            if (isCorrect === false) {
                break;
            }
        }

        if (isCorrect) {
            tableRef.style.border = '2px solid green';
            result.firstElementChild.textContent = 'You solve it! Congratulations!';
            result.firstElementChild.style.color = 'green';
        } else {
            tableRef.style.border = '2px solid red';
            result.firstElementChild.textContent = 'NOP! You are not done yet...';
            result.firstElementChild.style.color = 'red';
        }
    }

    function clear(ev) {
        const rows = Array.from(tbodyRef);

        for (let i = 0; i < rows.length; i++) { //изчиства клетките
            const cells = Array.from(rows[i].children);
            for (let j = 0; j < cells.length; j++) {
                cells[j].firstElementChild.value = '';
            }
        }

        tableRef.style.border = 'none';
        result.firstElementChild.textContent = '';
    }
}