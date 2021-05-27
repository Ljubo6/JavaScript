function focused() {
    const sectionRef = Array.from(document.querySelectorAll('div>div>input'));
    sectionRef.forEach(x => {
        x.addEventListener('focus',onFocus);
        x.addEventListener('blur',onBlur);
    });

    function onFocus(ev){
        ev.target.parentElement.className = 'focused';
    }

    function onBlur(ev){
        ev.target.parentElement.className = '';
    }
}