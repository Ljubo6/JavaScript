window.addEventListener('load', solution);

function solution() {

  const editBtn = document.querySelector('#editBTN')
  const continueBtn = document.querySelector('#continueBTN')
  continueBtn.addEventListener('click',() => {
    const container = document.querySelector('#block')
    container.innerHTML = ''
    const h3 = createElement('h3','Thank you for your reservation!')
    container.appendChild(h3)
  })

  const fullNameInput = document.querySelector('#fname')
  const emailInput = document.querySelector('#email')
  const phoneInput = document.querySelector('#phone')
  const addressInput = document.querySelector('#address')
  const codeInput = document.querySelector('#code')
  const submitBTN = document.querySelector('#submitBTN')

  let arrInput = []


  submitBTN.addEventListener('click',createInfoCard)


  function createInfoCard(event){
    event.preventDefault()
    if (fullNameInput.value === '' || emailInput.value === ''){
      return
    }

    const infoCard = document.querySelector('#infoPreview')

    const fullName = createElement('li',`Full Name: ${fullNameInput.value}`)
    const email = createElement('li',`Email: ${emailInput.value}`)
    const phone = createElement('li',`Phone Number: ${phoneInput.value}`)
    const address = createElement('li',`Address: ${addressInput.value}`)
    const code = createElement('li',`Postal Code: ${codeInput.value}`)



    arrInput = [fullNameInput.value,emailInput.value,phoneInput.value,addressInput.value,codeInput.value]

    const arr = [fullName,email,phone,address,code]
    appendElements(arr,infoCard)

    submitBTN.setAttribute('disabled','')

    fullNameInput.value = ''
    emailInput.value = ''
    phoneInput.value = ''
    addressInput.value = ''
    codeInput.value = ''

    changeAttributeEnable()

    editBtn.addEventListener('click',editInfoForm)
    function editInfoForm(event){
      fullNameInput.value = arrInput[0]
      emailInput.value = arrInput[1]
      phoneInput.value = arrInput[2]
      addressInput.value = arrInput[3]
      codeInput.value = arrInput[4]

      submitBTN.removeAttribute('disabled')
      submitBTN.setAttribute('enabled','')
      infoCard.innerHTML = ''
      changeAttributeDisable()
    }
  }

  function changeAttributeEnable(){
    editBtn.removeAttribute('disabled')
    editBtn.setAttribute('enabled','')

    continueBtn.removeAttribute('disabled')
    continueBtn.setAttribute('enabled','')
  }

  function changeAttributeDisable(){

    editBtn.removeAttribute('enabled')
    editBtn.setAttribute('disabled','')

    continueBtn.removeAttribute('enabled')
    continueBtn.setAttribute('disabled','')
  }
  function appendElements(arr,infoCard){
    arr.forEach(e => infoCard.appendChild(e))
    return infoCard
  }
  function createElement(type,elementValue,className){
    const element = document.createElement(type)

    if (elementValue){
      element.textContent = elementValue
    }
    if(className){
      element.classlist.add(className)
    }
    return element
  }
}
