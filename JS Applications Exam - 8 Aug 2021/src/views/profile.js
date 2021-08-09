import {html} from '../../node_modules/lit-html/lit-html.js';
import { getMyBooks } from '../api/data.js';
import {book} from './common/book.js';

const profileTemplate = (books) => html`
        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>

            ${books.length ? html`<ul class="my-books-list">
            ${books.map(book)}
            </ul>` : html`<p class="no-books">No books in database!</p>`}
            
            
        </section>
`;

export async function profilePage(ctx){
    const books = await getMyBooks(ctx.user._id);

    ctx.render(profileTemplate(books))
}