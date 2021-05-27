function deleteByEmail() {
    const inputRef = document.querySelector('input[name="email"]');
    const tableDataRef = Array.from(document.querySelectorAll('tbody>tr>td'));
    

    const outputRef = document.getElementById('result');

    tableDataRef.forEach(x => {
        if (x.textContent.includes(inputRef.value)) {
            x.parentNode.remove();
            outputRef.textContent = 'Deleted.';
        }else{
            outputRef.textContent = 'Not found.';
        }
        
    })
}
