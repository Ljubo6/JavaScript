function solve() {
    const addMovieRef = document.getElementById('container');
    const moviesUlRef = document.getElementById('movies');
    const archiveSectionRef = document.getElementById('archive');
    const clearButtonRef = archiveSectionRef.lastElementChild.addEventListener('click', clear);
    const onScreenButtonRef = addMovieRef.children[3];
    onScreenButtonRef.addEventListener('click', onScreen);



    function onScreen(ev) {
        ev.preventDefault();

        let movieName = addMovieRef.children[0];
        let hall = addMovieRef.children[1];
        let ticketPrice = addMovieRef.children[2];
        if (movieName.value !== '' && hall.value !== '' && ticketPrice.value !== '' && Number(ticketPrice.value)) {

            const liElement = generateElements('li');
            const spanElement = generateElements('span', movieName.value);
            const strongElement = generateElements('strong', `Hall: ${hall.value}`);
            const divElement = generateElements('div');
            const strongElementDiv = generateElements('strong', Number(ticketPrice.value).toFixed(2));
            const inputElement = generateElements('input', undefined, 'placeholder', 'Tickets Sold')
            const archiveButton = generateElements('button', 'Archive');
            archiveButton.addEventListener('click', archive);

            liElement.appendChild(spanElement);
            liElement.appendChild(strongElement);
            divElement.appendChild(strongElementDiv);
            divElement.appendChild(inputElement);
            divElement.appendChild(archiveButton);
            liElement.appendChild(divElement);

            moviesUlRef.children[1].appendChild(liElement);

        }

        movieName.value = '';
        hall.value = '';
        ticketPrice.value = '';
    }

    function generateElements(type, text, attribute, attributeText) {
        let element = document.createElement(type);

        if (type === 'input') {
            element.setAttribute(attribute, attributeText);
        }

        if (text != undefined) {
            element.textContent = text;
        }

        if (attribute != undefined) {
            element.attribute = attributeText;
        }
        return element;
    }

    function archive(ev) {
        ev.preventDefault();

        const inputRef = ev.target.previousSibling;
        const movieName = ev.target.parentNode.parentNode.children[0];
        const ticketPrice = ev.target.parentNode.children[0];

        if (inputRef.value != '' && Number(inputRef.value) || inputRef.value != '' && Number(inputRef.value) === 0) {
            const liElement = generateElements('li');
            const spanElement = generateElements('span', movieName.textContent);
            const strongElement = generateElements('strong', `Total amount: ${(Number(ticketPrice.textContent) * Number(inputRef.value)).toFixed(2)}`);
            const deleteButton = generateElements('button', 'Delete');
            deleteButton.addEventListener('click', deleteArchived);

            liElement.appendChild(spanElement);
            liElement.appendChild(strongElement);
            liElement.appendChild(deleteButton);

            archiveSectionRef.children[1].appendChild(liElement);

            ev.target.parentNode.parentNode.parentNode.removeChild(ev.target.parentNode.parentNode);
        }
    }


    function deleteArchived(ev) {
        ev.preventDefault();
        ev.target.parentNode.remove();
    }

    function clear(ev) {
        ev.preventDefault();

        const ulRef = ev.target.previousElementSibling;
        while (ulRef.firstChild) {
            ulRef.removeChild(ulRef.firstChild);
        }
    }
}