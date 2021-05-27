function validate() {
    const inputRef = document.getElementById('email');
    inputRef.addEventListener('change',onChange);
    function onChange(ev){
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (pattern.test(ev.target.value)) {
            ev.target.className = '';
        }else{
            ev.target.className = 'error';
        }
    }
}