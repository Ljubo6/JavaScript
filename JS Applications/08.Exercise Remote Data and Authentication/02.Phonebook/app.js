function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', loadInfo)
    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', createInfo)
    // console.log(loadBtn);
    // console.log(createBtn);



}

attachEvents();

async function loadInfo() {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();

    const phones = Object.values(data);
    createList(phones);
}
function createList(phones) {
    const ul = document.getElementById('phonebook');
    ul.innerHTML = '';
    phones.forEach(element => {
        let li = document.createElement('li');
        li.textContent = `${element.person}:${element.phone}`;
        let btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.addEventListener('click',async (e) => {
            e.target.parentElement.remove();
            let id  = e.target.id;
            let response = await fetch('http://localhost:3030/jsonstore/phonebook/' + id,{
                method: 'delete',
            });
            let data = await response.json();
        })
        li.appendChild(btn);
        ul.appendChild(li);
        
    });

    
}
async function createInfo(){
    let person = document.getElementById('person').value;
    let phone = document.getElementById('phone').value;
    let personInfo = {person,phone};
    let response = await fetch('http://localhost:3030/jsonstore/phonebook',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(personInfo)
    });
    let data = await response.json();
    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';
    loadInfo();
}


