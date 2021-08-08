import {html} from '../../node_modules/lit-html/lit-html.js';
import { addLike, deleteMovie, getLikeForMovieFromUser, getMovieById, getNumberLikesForMovie } from '../api/data.js';

const detailsTemplate = (movie,isOwner,onDelete,userLike,likes,onLike) => html`
<section id="movie-example">
<div class="container">
    <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>

        <div class="col-md-8">
            <img class="img-thumbnail" src=${movie.img}
                    alt="Movie">
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3 ">Movie Description</h3>
            <p>${movie.description}</p>
            ${isOwner ? html`<a @click=${onDelete} class="btn btn-danger" href="javascript:void(0)">Delete</a>
            <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>` : html`${likeTemplate(movie,userLike,onLike)}` }
            
            
            <span class="enrolled-span">Liked ${likes}</span>
        </div>
    </div>
</div>
`;
const likeTemplate = (movie,userLike,onLike) => html`
${userLike.length 
? '' 
: html`<a @click=${() => onLike(movie._id)} class="btn btn-primary" href="/details/${movie._id}">Like</a>` }

`;


export async function detailsPage(ctx){
    const movieId = ctx.params.id;
    const movie = await getMovieById(movieId);
    const isOwner = ctx.user && movie._ownerId == ctx.user._id;
    const likes = await getNumberLikesForMovie(movie._id);

    const userLike = await getLikeForMovieFromUser(movie._id,ctx.user._id);

    ctx.render(detailsTemplate(movie,isOwner,onDelete,userLike,likes,onLike));

    async function onDelete(){
        const confirmed = confirm('Are you sure');
        if (confirmed) {
            await deleteMovie(movieId);
            ctx.page.redirect('/');
        }
    }
    async function onLike(movieId){
        await addLike({movieId})

    }
}