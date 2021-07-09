async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const response = await fetch(url);
    const data = await response.json();

    const container = document.getElementById('container');

    const main = document.getElementById('main');
    const templateProfile = document.querySelector('.profile');
    templateProfile.remove();



    let output = Object.keys(data).map(x => data[x]);
    output.forEach((x, i) => {
        let age = x.age;
        let email = x.email;
        let username = x.username;
        let id = x._id;
        let index = i + 1;
        // console.log(age,email,username,id,index);


        let htmlProfile = createUser(age, email, username, index);
        main.appendChild(htmlProfile);
    })
}
function createUser(age, email, username, index) {

    const profile = document.createElement('div');
    profile.classList.add('profile');

    const profileImage = document.createElement('img');
    profileImage.src = './iconProfile2.png';
    profileImage.classList.add('userIcon');

    const labelLock = document.createElement('label');
    labelLock.textContent = 'Lock';


    const inputRadioLock = document.createElement('input')
    inputRadioLock.type = 'radio';
    inputRadioLock.name = `user${index}Locked`;
    inputRadioLock.value = 'lock';
    inputRadioLock.checked = true;

    const labelUnlock = document.createElement('label');
    labelUnlock.textContent = 'Unlock';

    const inputRadioUnlock = document.createElement('input')
    inputRadioUnlock.type = 'radio';
    inputRadioUnlock.name = `user${index}Locked`;
    inputRadioUnlock.value = 'unlock';


    const br = document.createElement('br');

    const hr = document.createElement('hr');

    const userLabel = document.createElement('label');
    userLabel.textContent = 'Username';

    const inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.name = `user${index}Username`;
    inputUsername.value = username;
    inputUsername.disabled = true;
    inputUsername.readOnly = true;

    const div = document.createElement('div');
    div.id = `user${index}HiddenFields`;

    const divHr = document.createElement('hr');
    const divBr = document.createElement('br');

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = `user${index}Email`;
    emailInput.value = email;
    emailInput.disabled = true;
    emailInput.readOnly = true;


    const ageLabel = document.createElement('label');
    ageLabel.textContent = 'Age:';

    const ageInput = document.createElement('input');
    ageInput.type = 'age';
    ageInput.name = `user${index}Age`;
    ageInput.value = age;
    ageInput.disabled = true;
    ageInput.readOnly = true;

    div.appendChild(divHr);
    div.appendChild(emailLabel);
    div.appendChild(emailInput);
    div.appendChild(ageLabel);
    div.appendChild(ageInput);
    const button = document.createElement('button');
    button.textContent = 'Show more';
    button.addEventListener('click', showHiddenInfo);

    profile.appendChild(profileImage);
    profile.appendChild(labelLock);
    profile.appendChild(inputRadioLock);
    profile.appendChild(labelUnlock);
    profile.appendChild(inputRadioUnlock);
    profile.appendChild(br);
    profile.appendChild(hr);
    profile.appendChild(userLabel);
    profile.appendChild(inputUsername);
    profile.appendChild(div);
    profile.appendChild(button);



    return profile;

}
function showHiddenInfo(e) {
    let profile = e.target.parentElement;
    let showMoreButton = e.target;
    let hiddenFieldsDiv = e.target.previousElementSibling;
    let radioButton = profile.querySelector('input[type="radio"]:checked');

    if (radioButton.value !== 'unlock') {
        return;
    }


    showMoreButton.textContent = showMoreButton.textContent === 'Show more'
    ? 'Hide it'
    : 'Show more';
    hiddenFieldsDiv.style.display = hiddenFieldsDiv.style.display === 'block'
    ? 'none'
    : 'block';

}
