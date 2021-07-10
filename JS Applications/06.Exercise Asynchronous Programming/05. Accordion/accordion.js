window.addEventListener('load', solution);
async function solution() {
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const response = await fetch(url);
    const data = await response.json();


    const output = Object.keys(data).map(x => data[x]).forEach(x => {
        let id = x._id;
        let title = x.title;
        let accordion = createAccordion(id, title);
        main.appendChild(accordion);

    })
    function createAccordion(id, title) {
        let divAccordion = document.createElement('div');
        divAccordion.classList.add('accordion');

        let divHead = document.createElement('div');
        divHead.classList.add('head');

        let span = document.createElement('span');
        span.textContent = title;

        let button = document.createElement('button')
        button.classList.add('button');
        button.id = id;
        button.textContent = 'More';

        button.addEventListener('click', showMore);

        divHead.appendChild(span);
        divHead.appendChild(button);

        let divExtra = document.createElement('div');
        divExtra.classList.add('extra');
        divExtra.style.display = 'none';

        let p = document.createElement('p');

        divExtra.appendChild(p);
        
        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);

        return divAccordion;
    }
    return output;
}
async function showMore(e) {
    let id = e.target.id;
    let hiddenUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id;

    let responseHidden = await fetch(hiddenUrl);
    let dataHidden = await responseHidden.json();

    let content = dataHidden.content;

    let btn = e.target;

    if (btn.textContent === 'More') {
        let head = btn.parentElement;
        let extra = head.nextElementSibling;

        btn.textContent = 'Less';
        extra.style.display = 'block';
        extra.children[0].textContent = content;
    }else if(btn.textContent === 'Less'){
        let head = btn.parentElement;
        let extra = head.nextElementSibling;
        
        btn.textContent = 'More';
        extra.style.display = 'none';
    }

}