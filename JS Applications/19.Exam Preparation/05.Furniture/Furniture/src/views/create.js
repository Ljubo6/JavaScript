import {html} from '../../node_modules/lit-html/lit-html.js';
import { createFurniture } from '../api/data.js';

const createTemplate = (onSubmit, invalidMake, invalidModel, invalidYear, invalidDescription, invalidPrice, invalidImage) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control + ${invalidMake ? 'is-invalid' : 'is-valid'}" id="new-make" type="text"
                        name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control + ${invalidModel ? 'is-invalid' : 'is-valid'}" id="new-model" type="text"
                        name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control + ${invalidYear ? 'is-invalid' : 'is-valid'}" id="new-year" type="number"
                        name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control + ${invalidDescription ? 'is-invalid' : 'is-valid'}" id="new-description"
                        type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control + ${invalidPrice ? 'is-invalid' : 'is-valid'}" id="new-price" type="number"
                        name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control + ${invalidImage ? 'is-invalid' : 'is-valid'}" id="new-image" type="text"
                        name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>`;

export async function createPage(ctx){
    ctx.render(createTemplate(onSubmit));
    async function onSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const furniture = {
            make: formData.get('make').trim(),
            model: formData.get('model').trim(),
            year: Number(formData.get('year').trim()),
            description: formData.get('description').trim(),
            price: Number(formData.get('price').trim()),
            image: formData.get('img').trim(),
            material: formData.get('material').trim()
        }


        // if (Object.entries(furniture).filter(([k,v]) => k != 'material').some(([k,v]) => v == '')) {
        //     return alert('All fields are required');
        // }

        // if (Object.values(furniture).some(x => !x)) {
        //     return alert('All fields are required');
        // }
        let invalidMake = false;
        let invalidModel = false;
        let invalidYear = false;
        let invalidDescription = false;
        let invalidPrice = false;
        let invalidImage = false;

        if (furniture.make.length < 4) {
            invalidMake = true;
            ctx.render(createTemplate(onSubmit, invalidMake, invalidModel, invalidYear, invalidDescription, invalidPrice, invalidImage));
            return alert('Make must be at least 4 symbols long')
        }
        if (furniture.model.length < 4) {
            invalidModel = true;
            ctx.render(createTemplate(onSubmit, invalidMake, invalidModel, invalidYear, invalidDescription, invalidPrice, invalidImage));
            return alert('Model must be at least 4 symbols long')
        }
        if (furniture.year < 1950 || furniture.year > 2050) {
            invalidYear = true;
            ctx.render(createTemplate(onSubmit, invalidMake, invalidModel, invalidYear, invalidDescription, invalidPrice, invalidImage));
            return alert('Year must be between 1950 and 2050')
        }
        if (furniture.description.length < 10) {
            invalidDescription = true;
            ctx.render(createTemplate(onSubmit, invalidMake, invalidModel, invalidYear, invalidDescription, invalidPrice, invalidImage));
            return alert('Description must be more than 10 symbols')
        }
        if (furniture.price < 0) {
            invalidPrice = true;
            ctx.render(createTemplate(onSubmit, invalidMake, invalidModel, invalidYear, invalidDescription, invalidPrice, invalidImage));
            return alert('Price must be a positive number')
        }
        if (furniture.image == '') {
            invalidImage = true;
            ctx.render(createTemplate(onSubmit, invalidMake, invalidModel, invalidYear, invalidDescription, invalidPrice, invalidImage));
           return alert('Image URL is required')
        }


        if (invalidMake == false && invalidModel == false &&
            invalidYear == false && invalidDescription == false && invalidPrice == false && invalidImage == false) {
            await createFurniture(furniture);
        }
        
        
        event.target.reset();

        ctx.page.redirect('/');
    }
}