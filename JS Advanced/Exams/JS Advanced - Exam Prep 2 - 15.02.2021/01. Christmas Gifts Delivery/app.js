function solution() {
    const uls = document.querySelectorAll('section ul');
    const[gifts,sent,discarded] = uls;
    const input = document.querySelector('input');
    const btn = document.querySelector('button');
    btn.addEventListener('click',addGift);

    function addGift(){
        const name = input.value;
        input.value = '';
        const element = crteElement('li',name,'gift');
        const sendBtn = crteElement('button','Send','sendButton');
        const discardBtn = crteElement('button','Discard','discardButton');

        element.appendChild(sendBtn);
        element.appendChild(discardBtn);

        sendBtn.addEventListener('click',() => sendGift(name,element));
        discardBtn.addEventListener('click',() => discardGift(name,element))

        gifts.appendChild(element);

        sortGifts();

    };
    function sendGift(name,gift){
        gift.remove();
        const element = crteElement('li',name,'gift');
        sent.appendChild(element);
    };
    function discardGift(name,gift){
        gift.remove();
        const element = crteElement('li',name,'gift');
        discarded.appendChild(element);
    };

    function sortGifts(){
        let boxes = gifts.children;
        Array.from(boxes).sort((a,b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
        .forEach(g => gifts.appendChild(g));
    }

    function crteElement(type,content,className){
        const result = document.createElement(type);
        if(content){
            result.textContent = content;
        }
        
        if (className) {
            result.className = className;
        }
        return result;
    };
}