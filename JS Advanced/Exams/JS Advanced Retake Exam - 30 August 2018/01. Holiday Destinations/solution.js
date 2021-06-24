function addDestination() {

    const divInputsRef = document.getElementById('input');
    const tableBodyRef = document.getElementById('destinationsList');
    const divSummaryRef = document.getElementById('summaryBox');


    const summer = divSummaryRef.children[1];
    const autumn = divSummaryRef.children[3];
    const winter = divSummaryRef.children[5];
    const spring = divSummaryRef.children[7];

    const seasons = {
        Summer() {summer.value = Number(summer.value) + 1},
        Autumn() {autumn.value = Number(autumn.value) + 1},
        Winter() {winter.value = Number(winter.value) + 1},
        Spring() {spring.value = Number(spring.value) + 1}
    };


    const cityInput = divInputsRef.children[1];
    const countryInput = divInputsRef.children[3];
    const seasonSelect = divInputsRef.children[5];

    if (cityInput.value === '' || countryInput.value === '') {
        return;
    }

    let trElement = createElement('tr');
    let tdElementOne = createElement('td', `${cityInput.value}, ${countryInput.value}`);
    let season = seasonSelect.value;
    season = season[0].toUpperCase() + season.slice(1);
    let tdElementTwo = createElement('td', `${season}`);

    trElement.appendChild(tdElementOne);
    trElement.appendChild(tdElementTwo);
    tableBodyRef.appendChild(trElement);


    cityInput.value = '';
    countryInput.value = '';

    seasons[season]();

    function createElement(type, content, className) {
        const result = document.createElement(type);
        if (content) {
            result.textContent = content;
        }

        if (className) {
            result.className = className;
        }
        return result;
    };
}