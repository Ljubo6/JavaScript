function attachEvents() {
    document.getElementById('submit').addEventListener('click',getWeather);
}

attachEvents();

async function getWeather(){
    const input = document.getElementById('location');
    const cityName = input.value;

    const [current,upcoming] = await Promise.all([
        getCurrent(code),
        getUpcoming(code)
    ]);
}
async function getCode(cityName){
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const response = await fetch(url);
    const data = response.json();

    return data.find(x => x.name.toLowerCase() == cityName.toLowerCase()).code;
}
async function getCurrent(code){
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    const response = await fetch(url);
    const data = response.json();
}