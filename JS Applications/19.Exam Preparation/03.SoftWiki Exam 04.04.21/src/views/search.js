import { html } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';
import { articleTemplate } from './common/article.js';

const searchTemplate = (articles, onSearch,title) => html`

<section id="search-page" class="content">
    <h1>Search</h1>
    <form  id="search-form">
        <p class="field search">
            <input id="search-input" type="text" placeholder="Search by article title" name="search" .value=${title || ''}>
        </p>
        <p class="field submit">
            <input @click=${onSearch} class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">

        ${ articles.length == 0 
            ? html`<h3 class="no-articles">No matching articles</h3>` 
            : articles.map(articleTemplate)} 

    </div>
</section>
`;
export async function searchPage(ctx) {
    const title = ctx.querystring.split('=')[1];


    const articles = await search(title);
    if (title === '') {
        articles.splice(0);
    }

    ctx.render(searchTemplate(articles, onSearch,title));

   
    
    
    function onSearch(event) {
        event.preventDefault();
         const result = document.querySelector('[name="search"]');
        const query = result.value;
        ctx.page.redirect('/search?query=' + query);
        
    }
    
}