function solve() {
    document.querySelector('button').addEventListener('click',onClick);
    const menuTo = document.getElementById('selectMenuTo');
    
    const optionOne = document.createElement('option');
    optionOne.value = 'binary';
    optionOne.textContent = 'Binary';

    const optionTwo = document.createElement('option');
    optionTwo.value = 'hexadecimal';
    optionTwo.textContent = 'Hexadecimal';

    menuTo.appendChild(optionOne);
    menuTo.appendChild(optionTwo);

    const output = document.getElementById('result');
    function onClick(){

        const inputRef = document.getElementById('input');

        const inputValue = Number(inputRef.value);
        let result = '';
        if (menuTo.value === 'binary') {
            result = inputValue.toString(2);
        }else if(menuTo.value === 'hexadecimal'){
            result = inputValue.toString(16).toUpperCase();
        }
        output.value = result;
    }
   
}