import {html, render} from '../node_modules/lit-html/lit-html.js';

const listTemplate = (data) => html`
<ul>
    ${data.map(t => html`<li>${t}</li>`)}
</ul>
`;

document.getElementById('btnLoadTowns').addEventListener('click',updateList);

function updateList(event){
    event.preventDefault();

    const townAsString = document.getElementById('towns').value;

    const roots = document.getElementById('root');

    const towns = townAsString.split(',').map(x => x.trim());

    const result = listTemplate(towns);

    render(result,root);
}