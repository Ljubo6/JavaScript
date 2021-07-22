import {showDetails} from './details.js';

async function getMovieById(id){
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    const data = response.json();
    console.log(data);
    return data;
}

async function onSubmit(event){
    const formData = new FormData(event.target);
    const movieId = formData.get('id');

    const movie = {
        title: formData.get('title'),
        description: formData.get('description'),
        img: formData.get('imageUrl')
    }
    const response = await fetch('http://localhost:3030/data/movies/' + movieId,{
        method: 'put',
        headers:{
            'Content-type': 'application/json',
            'X-Authorization' : sessionStorage.getItem('authToken')
        },
        body: JSON.stringify(movie)
    });

    if (response.ok) {
        showDetails(movieId);
    }else{
        const error = await response.json();
        alert(error.message);
    }
}


let main;
let section;
let container;
export function setupEdit(mainTarget, sectionTarget){
    main = mainTarget;
    section = sectionTarget;

    section.querySelector('form').addEventListener('submit',onSubmit);
}
export async function showEdit(id){
    main.innerHTML = '';
    main.appendChild(section);
    const movie = await getMovieById(id);
    section.querySelector('[name="id"]').value = id
    section.querySelector('[name="title"]').value = movie.title;
    section.querySelector('[name="description"]').value = movie.description;
    section.querySelector('[name="imageUrl"]').value = movie.img;
}

