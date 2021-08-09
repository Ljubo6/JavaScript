window.addEventListener('load', solution);
function solution() {
    let inputForm = document.querySelector('#form');
    let fullNameInput = inputForm.querySelector('#fname');
    let emailInput = inputForm.querySelector('#email');
    let phoneNumberInput = inputForm.querySelector('#phone');
    let addressInput = inputForm.querySelector('#address');
    let postalCodeInput = inputForm.querySelector('#code');
    let submitButton = inputForm.querySelector('#submitBTN');
    let infoPreviewList = document.querySelector('#infoPreview');
    let editButton = document.querySelector('#editBTN');
    let continueButton = document.querySelector('#continueBTN');
    let blockDiv = document.querySelector('#block');
   
    let inputObject = {
      fullName: '',
      email: '',
      phoneNumber: 0,
      address: '',
      postalCode: '',
    };
   
    submitButton.addEventListener('click', (e) => {
      if (fullNameInput.value === '' || emailInput.value === '') {
        return;
      }
      fillObject();
      createPreview();
      clearInputFields();
      enablePreviewButtons();
    });
   
    function createPreview() {
      let fullNameListElement = document.createElement('li');
      let emailListElement = document.createElement('li');
      let phoneNumberListElement = document.createElement('li');
      let addressListElement = document.createElement('li');
      let postalCodeListElement = document.createElement('li');
   
      fullNameListElement.textContent = `Full Name: ${fullNameInput.value}`;
      emailListElement.textContent = `Email: ${emailInput.value}`;
      phoneNumberListElement.textContent = `Phone Number: ${phoneNumberInput.value}`;
      addressListElement.textContent = `Address: ${addressInput.value}`;
      postalCodeListElement.textContent = `Postal Code: ${postalCodeInput.value}`;
   
      infoPreviewList.appendChild(fullNameListElement);
      infoPreviewList.appendChild(emailListElement);
      infoPreviewList.appendChild(phoneNumberListElement);
      infoPreviewList.appendChild(addressListElement);
      infoPreviewList.appendChild(postalCodeListElement);
    }
   
    function fillObject() {
      inputObject.fullName = fullNameInput.value;
      inputObject.email = emailInput.value;
      inputObject.phoneNumber = phoneNumberInput.value;
      inputObject.address = addressInput.value;
      inputObject.postalCode = postalCodeInput.value;
    }
   
    function clearInputFields() {
      fullNameInput.value = '';
      emailInput.value = '';
      phoneNumberInput.value = '';
      addressInput.value = '';
      postalCodeInput.value = '';
    }
   
    function enablePreviewButtons() {
      submitButton.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;
      editButton.addEventListener('click', edit);
      continueButton.addEventListener('click', continueToTheEnd);
    }
   
    function disablePreviewButtons() {
      editButton.disabled = true;
      continueButton.disabled = true;
    }
   
    function edit() {
      fullNameInput.value = inputObject.fullName;
      emailInput.value = inputObject.email;
      phoneNumberInput.value = inputObject.phoneNumber;
      addressInput.value = inputObject.address;
      postalCodeInput.value = inputObject.postalCode;
      disablePreviewButtons();
      submitButton.disabled = false;
      clearPreviewList();
    }
   
    function continueToTheEnd() {
      let h3 = document.createElement('h3');
      h3.textContent = "Thank you for your reservation!";
      removeAllChildNodes(blockDiv);
      blockDiv.appendChild(h3);
    }
   
    function clearPreviewList() {
      removeAllChildNodes(infoPreviewList);
    }
   
    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  }