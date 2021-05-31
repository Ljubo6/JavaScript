function addItem() {
    const itemText = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = itemText.value;
    option.value = itemValue.value;

    let select = document.getElementById('menu');
    select.appendChild(option);

    itemText.value = '';
    itemValue.value = '';
}