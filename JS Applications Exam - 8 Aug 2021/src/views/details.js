import {html} from '../../node_modules/lit-html/lit-html.js';
import { deleteBook, getBookById, getLikeForBookFromUser, getTotalLikesCountForBook,addLike} from '../api/data.js';

const detailsTemplate = (book,isOwner,onDelete,isUser,userLike,likes,onLike) => html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <div class="actions">
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    ${isUser ? html` ${isOwner ? html`<a class="button" href="/edit/${book._id}">Edit</a>
                    <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likes}</span>
                    </div> ` 
                    :  
                    html`
                    ${likeTemplate(book,userLike,onLike)}
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likes}</span>
                    </div>
                    `}` : html`
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likes}</span>
                    </div>`}
                   
                    

                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    <!-- ${isOwner ? html`<div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div>` : html`<a class="button" href="#">Like</a>`} -->
                    

                    <!-- ( for Guests and Users )  -->
                    
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>
`;

const likeTemplate = (book,userLike,onLike) => html`
<!-- <a class="button" href="#">Like</a> -->
${userLike.length 
? '' 
: html`<a @click=${() => onLike(book._id)} class="button" href="/details/${book._id}">Like</a>` }
`;

export async function detailsPage(ctx){

    const bookId = ctx.params.id;
    const book = await getBookById(bookId);
    const isOwner = ctx.user && book._ownerId == ctx.user._id;

    const likes = await getTotalLikesCountForBook(book._id);
    const userLike = await getLikeForBookFromUser(book._id,ctx.user._id);
    const isUser = ctx.user;
    ctx.render(detailsTemplate(book,isOwner,onDelete,isUser,userLike,likes,onLike));

    async function onDelete(){
        const confirmed = confirm('Are you sure');
        if (confirmed) {
            await deleteBook(bookId);
            ctx.page.redirect('/');
        }
    }
    async function onLike(bookId){
        await addLike({bookId})

    }
}