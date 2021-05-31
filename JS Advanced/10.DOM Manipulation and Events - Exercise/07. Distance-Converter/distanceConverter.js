function attachEventsListeners() {
    const btn = document.getElementById('convert');
    let output = document.getElementById('outputDistance');
    btn.addEventListener('click', onConvert);
    let dimentions = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    }
    function onConvert() {
        let from = Number(document.getElementById('inputDistance').value);

        let currentInputUnit = document.getElementById('inputUnits').value;
        let currentOutputUnit = document.getElementById('outputUnits').value;

        let inputToMeters = dimentions[currentInputUnit] * from;
        output.value = inputToMeters / dimentions[currentOutputUnit];
    }
}