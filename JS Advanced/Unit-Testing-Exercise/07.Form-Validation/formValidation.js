function validate() {
    const usernameRef = document.getElementById('username');
    const emailRef = document.getElementById('email');
    const passwordRef = document.getElementById('password');
    const confirmPasswordRef = document.getElementById('confirm-password');

    const companyRef = document.getElementById('company');
    const companyNumberRef = document.getElementById('companyNumber');
    const companyInfoRef = document.getElementById('companyInfo');

    const divValid = document.getElementById('valid');
    const submitButton = document.getElementById('submit');


    let validations = {
        isUsernameValid: false,
        isPasswordValid: false,
        isPasswordConfirmValid: false,
        isEmailValid: false,
    }

    companyRef.addEventListener('click', checked);
    submitButton.addEventListener('click', submit);


    function checked(ev) {
        // ev.preventDefault();

        let toCheck = companyInfoRef.style;
        if (toCheck.display === 'none') {
            toCheck.display = 'block';
        } else {
            toCheck.display = 'none';
        }

        let number = Number(companyNumberRef.value);
        if (number >= 1000 && number <= 9999) {
            validations.isCompanyNumValid = true;
        } else {
            validations.isCompanyNumValid = false;

        }
    }

    function submit(ev) {
        ev.preventDefault();

        const usernamePattern = /^([a-zA-Z0-9]){3,20}$/g;
        const passwordPattern = /^(\w){5,15}$/g;
        const emailPattern = /^(.+@(.+)?\.(.+)?)$/g;

        let username = usernameRef.value;
        let pass = passwordRef.value;
        let confirm = confirmPasswordRef.value;
        let email = emailRef.value;

        if (usernamePattern.test(username)) {
            validations.isUsernameValid = true;
        } else {
            validations.isUsernameValid = false;
        }

        if (passwordPattern.test(pass) && confirm === pass) {
            validations.isPasswordValid = true;
        } else {
            validations.isPasswordValid = false;
        }

        if (confirm === pass && validations.isPasswordValid === true) {
            validations.isPasswordConfirmValid = true;
        } else {
            validations.isPasswordConfirmValid = false;
        }

        if (emailPattern.test(email)) {
            validations.isEmailValid = true;
        } else {
            validations.isEmailValid = false;
        }


        for (let key in validations) {
            if (validations[key] === false) {
                switch (key) {
                    case 'isUsernameValid':
                        usernameRef.style.borderColor = 'red';
                        break;
                    case 'isPasswordValid':
                        passwordRef.style.borderColor = 'red';
                        break;
                    case 'isPasswordConfirmValid':
                        confirmPasswordRef.style.borderColor = 'red';
                        break;
                    case 'isEmailValid':
                        emailRef.style.borderColor = 'red';
                        break;
                    case 'isCompanyNumValid':
                        companyNumberRef.style.borderColor = 'red';
                        break;
                }
            } else {
                switch (key) {
                    case 'isUsernameValid':
                        usernameRef.style.borderColor = '';
                        break;
                    case 'isPasswordValid':
                        passwordRef.style.borderColor = '';
                        break;
                    case 'isPasswordConfirmValid':
                        confirmPasswordRef.style.borderColor = '';
                        break;
                    case 'isEmailValid':
                        emailRef.style.borderColor = '';
                        break;
                    case 'isCompanyNumValid':
                        companyNumberRef.style.borderColor = '';
                        break;
                }
            }
        }

        if (!Object.values(validations).includes(false)) {
            divValid.style.display = 'block';
        } else {
            divValid.style.display = 'none';
        }
    }
}
