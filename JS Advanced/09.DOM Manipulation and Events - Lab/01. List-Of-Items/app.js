function addItem() {
    let ul = document.getElementById('items');
    let inputText = document.getElementById('newItemText');
    const newElementLi = document.createElement('li');
    newElementLi.textContent = inputText.value;

    ul.appendChild(newElementLi);
    inputText.value = '';
}