function attachEvents() {

    document.getElementById('submit').addEventListener('click',async () => {
        const author = document.querySelector("[name='author']").value;
        const content = document.querySelector("[name='content']").value;

        await sendMessage({author,content});

        document.querySelector("[name='author']").value = '';
        document.querySelector("[name='content']").value = '';

        getMessages();
    });
    document.getElementById('refresh').addEventListener('click',getMessages);
    getMessages();
}

attachEvents();

async function getMessages(){
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();

    const messages = Object.values(data).map(v => `${v.author}: ${v.content}`).join('\n');

    document.getElementById('messages').value = messages;
}
async function sendMessage(message){
    const response = await fetch('http://localhost:3030/jsonstore/messenger',{
        method: 'post',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(message)
    });
    const data = await response.json();
}