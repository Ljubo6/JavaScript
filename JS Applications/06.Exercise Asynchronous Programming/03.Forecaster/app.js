function attachEvents() {
    document.getElementById('submit').addEventListener('click',getWeather);
}

attachEvents();

async function getWeather(){
    const label = document.querySelector('.label');
    try {
        const input = document.getElementById('location');
        
        let todayDiv = document.getElementById('current');
        let upcomingDiv = document.getElementById('upcoming');
        todayDiv.innerHTML = '';
        upcomingDiv.innerHTML = '';
    
    
        const cityName = input.value;
        const code = await getCode(cityName);
    
        input.value = '';
    
        // const todayP = getToday(code);
        // const upcomingP = getUpcoming(code);
        // const [today,upcoming] = [
        //     await todayP,
        //     await upcomingP
        // ];
    
        const [today, upcoming] = await Promise.all([
            getToday(code),
            getUpcoming(code)
        ]);
    
        let symbols = {
            "Sunny": '&#x2600;',
            "Partly sunny": '&#x26C5;',
            "Overcast": '&#x2601;',
            "Rain": '&#x2614;',
            "Degrees": '&#176;'
        }
        const symbolSpan = e('span', { className: 'condition symbol' }, '');
        symbolSpan.innerHTML = symbols[today.forecast.condition];
    
        const tempSpan = e('span', { className: 'forecast-data' }, '');
        tempSpan.innerHTML = `${today.forecast.low}${symbols.Degrees}/${today.forecast.high}${symbols.Degrees}`;
    
        const result = e('div', { className: 'forecast' },
            symbolSpan,
            e('span', { className: 'condition' },
                e('span', { className: 'forecast-data' }, today.name),
                tempSpan,
                e('span', { className: 'forecast-data' }, today.forecast.condition))
        );
        let divCurrentLabel = e('div', {className: 'label'}, 'Current conditions');
        todayDiv.appendChild(divCurrentLabel);
    
        todayDiv.appendChild(result);

        divCurrentLabel = e('div', {className: 'label'}, 'Three-day forecast');
        upcomingDiv.appendChild(divCurrentLabel);
    
        const forecastInfoDiv = e('div', { className: 'forecast-info' }, upcoming.forecast.map(renderUpcoming));
        upcomingDiv.appendChild(forecastInfoDiv);
    
        document.getElementById('forecast').style.display = 'block';
    } catch (e) {
        // document.getElementById('forecast').style.display = 'block';
        // return document.getElementById('current').textContent = 'Error'
        alert('Error')
    }
}
async function getCode(cityName){
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const response = await fetch(url);
    const data = await response.json();

    return data.find(x => x.name.toLowerCase() == cityName.toLowerCase()).code;
}
async function getToday(code){
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function getUpcoming(code){
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
function renderUpcoming(forecast){
    let symbols = {
        "Sunny": '&#x2600;',
        "Partly sunny": '&#x26C5;',
        "Overcast": '&#x2601;',
        "Rain": '&#x2614;',
        "Degrees": '&#176;'
    }
    const symbolSpan = e('span',{className: 'symbol'});
    symbolSpan.innerHTML = symbols[forecast.condition];

    const tempSpan = e('span',{className: 'forecast-data'});
    tempSpan.innerHTML = `${forecast.low}${symbols.Degrees}/${forecast.high}${symbols.Degrees}`;

    const result = e('span',{className: 'upcoming'},
        symbolSpan,
        tempSpan,
        e('span',{className: 'forecast-data'},forecast.condition));

    return result;
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}



