import {html} from '../../node_modules/lit-html/lit-html.js';
import { getAllBooks } from '../api/data.js';
import {book} from './common/book.js'

const dashboardTemplate = (books) => html`
        <!-- Dashboard Page ( for Guests and Users ) -->
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
            ${books.length ? html`<ul class="other-books-list">
                ${books.map(book)}
            </ul>` : html`<p class="no-books">No books in database!</p>`}
            
            <!-- Display paragraph: If there are no books in the database -->
            
        </section>
`;

export async function dashboardPage(ctx){
    const books = await getAllBooks();
    ctx.render(dashboardTemplate(books));
}