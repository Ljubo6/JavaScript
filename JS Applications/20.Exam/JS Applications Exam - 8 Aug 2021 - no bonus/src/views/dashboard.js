import {html} from '../../node_modules/lit-html/lit-html.js';
import { getAllBooks } from '../api/data.js';
import {book} from './common/book.js'

const dashboardTemplate = (books) => html`
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            ${books.length ? html`<ul class="other-books-list">
                ${books.map(book)}
            </ul>` : html`<p class="no-books">No books in database!</p>`}   
        </section>
`;

export async function dashboardPage(ctx){
    const books = await getAllBooks();
    ctx.render(dashboardTemplate(books));
}