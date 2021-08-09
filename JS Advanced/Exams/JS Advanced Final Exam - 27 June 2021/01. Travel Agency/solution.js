window.addEventListener('load', solution);

function solution() {
  
  let submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', cretePreviewList);

  let editBtn = document.getElementById('editBTN');
  editBtn.addEventListener('click', returnFormToEdit);

  let continueBtn = document.getElementById('continueBTN');
  continueBtn.addEventListener('click', continueFunction)

  let fullNameRef = document.getElementById('fname');
  let emailRef = document.getElementById('email');
  let phoneNumberRef = document.getElementById('phone');
  let addressRef = document.getElementById('address');
  let postalCodeRef = document.getElementById('code');

  let ulPreviewRef = document.getElementById('infoPreview');

  let div = document.querySelector('#block');

  let info = {fullName :'', email : '', phoneNumber: '', address : '', postalCode : ''};

  function cretePreviewList(e) {
    e.preventDefault();

    if (fullNameRef.value === '' || emailRef.value === '') {
      return;
    }

    let fullNameLi = createElement('li', `Full Name:${fullNameRef.value}`);
    let emailLi = createElement('li', `Email:${emailRef.value}`);
    let phoneNumberLi = createElement('li', `Phone Number:${phoneNumberRef.value}`);
    let addressLi = createElement('li', `Address:${addressRef.value}`);
    let postalCodeLi = createElement('li', `Postal Code:${postalCodeRef.value}`);

    ulPreviewRef.appendChild(fullNameLi);
    ulPreviewRef.appendChild(emailLi);
    ulPreviewRef.appendChild(phoneNumberLi);
    ulPreviewRef.appendChild(addressLi);
    ulPreviewRef.appendChild(postalCodeLi);

    fullName = fullNameRef.value;
    email = emailRef.value;
    phoneNumber = phoneNumberRef.value;
    address = addressRef.value;
    postalCode = postalCodeRef.value;

    info = {fullName, email, phoneNumber, address, postalCode};

    fullNameRef.value = '';
    emailRef.value = '';
    phoneNumberRef.value = '';
    addressRef.value = '';
    postalCodeRef.value = '';

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

  }



  function returnFormToEdit() {

    let {fullName, email, phoneNumber, address, postalCode} = info;

    fullNameRef.value = fullName;
    emailRef.value = email;
    phoneNumberRef.value = phoneNumber;
    addressRef.value = address;
    postalCodeRef.value = postalCode;


    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;

    let lis = ulPreviewRef.querySelectorAll('li');
    for (let i = 0; li = lis[i]; i++) {
      li.parentElement.removeChild(li);
    }
  }

  function continueFunction() {

    let lis = ulPreviewRef.querySelectorAll('li');
    for (let i = 0; li = lis[i]; i++) {
      li.parentElement.removeChild(li);
    }
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;

    let h3 = createElement('h3', 'Thank you for reservation!');
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
    div.appendChild(h3);
  }

  function createElement(type, content, className) {
    const result = document.createElement(type);
    result.textContent = content;
    if (className) {
      result.className = className;
    }
    return result;
  }
}
