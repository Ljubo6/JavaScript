function validate() {
    const inputRef = document.getElementById('email');
    inputRef.addEventListener('change', change);

    const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    function change(ev) {
        if (pattern.test(ev.target.value)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}