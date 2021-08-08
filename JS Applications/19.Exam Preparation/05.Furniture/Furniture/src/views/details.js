import {html} from '../../node_modules/lit-html/lit-html.js';
import { deleteFurniture, getFurnitureById } from '../api/data.js';



const detailsTemplate = (furniture,isOwner,onDelete) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${furniture.img} />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${furniture.make}</span></p>
                <p>Model: <span>${furniture.model}</span></p>
                <p>Year: <span>${furniture.year}</span></p>
                <p>Description: <span>${furniture.description}</span></p>
                <p>Price: <span>${furniture.price}</span></p>
                <p>Material: <span>${furniture.material}</span></p>
                <div>
                    ${isOwner ? html`<a href="/edit/${furniture._id}" class="btn btn-info">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>` : ''}
                    
                </div>
            </div>
        </div>
`;
export async function detailsPage(ctx){

    const furnitureId = ctx.params.id;
    const furniture = await getFurnitureById(furnitureId);
    const isOwner = ctx.user && furniture._ownerId == ctx.user._id;
    ctx.render(detailsTemplate(furniture,isOwner,onDelete));

    async function onDelete(){
        const confirmed = confirm('Are you sure');
        if (confirmed) {
            await deleteFurniture(furnitureId);
            ctx.page.redirect('/');
        }
    }
}