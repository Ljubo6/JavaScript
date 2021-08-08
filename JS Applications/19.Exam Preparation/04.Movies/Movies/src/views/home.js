import {html} from '../../node_modules/lit-html/lit-html.js';
import { getAllMovies } from '../api/data.js';
import {getUserData} from '../utility.js';


const jumbotronTemplate = () => html`
<section id="home-page">
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
        <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
                class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px">
        <h1 class="display-4">Movies</h1>
        <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
    </div>
</section>
`;

const labelTemplate = () => html`
    <h1 class="text-center">Movies</h1>
`;
const addMovieButtonTemplate = () => html`
<section id="add-movie-button">
    <a href="/create" class="btn btn-warning ">Add Movie</a>
</section>
`;
const moviesTemplate = (movies) => html`
<section id="movie">
    <div class=" mt-3 ">
        <div class="row d-flex d-wrap">

            <div class="card-deck d-flex justify-content-center">
                ${movies.map(cardMovieTemplate)}
            </div>
        </div>
    </div>
</section>
`;

const cardMovieTemplate = (movie) => html`
<div class="card mb-4">
    <img class="card-img-top" src=${movie.img}
            alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        ${getUserData() ? html`<a href="/details/${movie._id}">
            <button type="button" class="btn btn-info">Details</button>
        </a>` : ''}
        
    </div>

</div>
`;



const layout = (movies) => html`
${jumbotronTemplate()}
${labelTemplate()}
${getUserData() ? addMovieButtonTemplate() : ''}
${moviesTemplate(movies)}
`;


export async function homePage(ctx){
    const movies = await getAllMovies();

    ctx.render(layout(movies));
}