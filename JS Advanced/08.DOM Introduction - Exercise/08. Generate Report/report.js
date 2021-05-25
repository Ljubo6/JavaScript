  
function generateReport() {
    const columnsRef = document.querySelectorAll('thead>tr>th');
    const columns = Array.from(columnsRef);

    const rowsRef = document.querySelectorAll('tbody>tr');
    const rows = Array.from(rowsRef);

    const outputRef = document.getElementById('output');
    let jsonData = [];
    for (const row of rows) {
        let rowData = {};
        for (let i = 0; i < columns.length; i++) {
            if (columns[i].children[0].checked === true) {
                let columnName = columns[i].textContent.trim().toLowerCase();
                rowData[columnName] = row.children[i].textContent;
            }
            
        }
        jsonData.push(rowData);
    }
    outputRef.value = JSON.stringify(jsonData);

}