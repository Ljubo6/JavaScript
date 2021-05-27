function attachGradientEvents() {
    const boxRef = document.getElementById('gradient-box');
    const resultRef = document.getElementById('result');

    boxRef.addEventListener('mousemove',percentage);

    function percentage(ev){
        let offset = ev.offsetX;
        resultRef.textContent = `${Math.floor(offset / 300 * 100)}%`;
    }
}