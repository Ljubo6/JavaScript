function addItem() {
    let ul = document.getElementById('items');
    let inputText = document.getElementById('newItemText');
    const newElementLi = document.createElement('li');
   
    newElementLi.textContent = inputText.value;

    const newElementAnchore = document.createElement('a');
    newElementAnchore.href = '#';
    newElementAnchore.textContent = '[Delete]';
    newElementLi.appendChild(newElementAnchore);
    ul.appendChild(newElementLi);
    inputText.value = '';


    ul.addEventListener('click',deleteLi);

    function deleteLi(ev){
        if (ev.target.tagName === 'A') {
            ev.target.parentNode.remove();
        }
    }
}