export let btn = document.querySelector('.btn-contact');
export let btnBody =document.querySelector('.contact-btn-body');
export let inputName = document.querySelector('.contact-input-1');
export let inputEmail = document.querySelector('.contact-input-2');
export let inputMessage = document.querySelector('.contact-input-3');
export let inputErrorName = document.querySelector('.contact-error-1');
export let inputErrorEmail = document.querySelector('.contact-error-2');
export let inputErrorMsg = document.querySelector('.contact-error-3');
export let contactHeader = document.querySelector('.contact-header-1');
export let contactInput = document.querySelectorAll('.contact-input');
export let textContact = document.querySelector('.text-contact');

export function contact() {
btn.addEventListener('click', () =>{
    event.preventDefault();
    checkFormValidity();

    if(!btn.classList.contains('activeBtn')) {
    contactInterval = setInterval(() => {
        if (inputName.value.trim() === '') {
            inputErrorName.classList.add('contactError');
            inputErrorName.classList.add('contactErrorActive');
            inputName.classList.add('contactInputActive');
        }
            
        else {
            inputErrorName.classList.remove('contactError');
            inputErrorName.classList.remove('contactErrorActive');
            inputName.classList.remove('contactInputActive');
        }
    
        if (inputEmail.value.trim() === ''){
            inputErrorEmail.textContent = 'This field is required';
            inputErrorEmail.classList.add('contactError');
            inputErrorEmail.classList.add('contactErrorActive');
            inputEmail.classList.add('contactInputActive');
        }
    
        else if (!isValidEmail(inputEmail.value.trim())){
            inputErrorEmail.textContent = 'Please enter a valid email address.';
            inputErrorEmail.classList.add('contactError');
            inputErrorEmail.classList.add('contactErrorActive');
            inputEmail.classList.add('contactInputActive');
        }
    
        else {
            inputErrorEmail.classList.remove('contactError');
            inputErrorEmail.classList.remove('contactErrorActive');
            inputEmail.classList.remove('contactInputActive');
        }

        if (inputMessage.value.trim() === '') {
            inputErrorMsg.classList.add('contactError');
            inputErrorMsg.classList.add('contactErrorActive');
            inputMessage.classList.add('contactInputActive');
        }
        
        else {
            inputErrorMsg.classList.remove('contactError');
            inputErrorMsg.classList.remove('contactErrorActive');
            inputMessage.classList.remove('contactInputActive');
        }
      }, 100);
    }
});
}

contact();

export function isValidEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}

export function checkFormValidity() {
    if ((inputName.value.trim().length >= 1) && (inputEmail.value.trim().length >= 1) && (inputMessage.value.trim().length >= 1) &&
        !inputErrorName.classList.contains('contactErrorActive') && !inputName.classList.contains('contactInputActive') &&
        !inputErrorEmail.classList.contains('contactErrorActive') && !inputEmail.classList.contains('contactInputActive') &&
        !inputErrorMsg.classList.contains('contactErrorActive') && !inputMessage.classList.contains('contactInputActive') &&
        (isValidEmail(inputEmail.value.trim()))){

        btn.textContent = 'Sending...';
        clearInterval('contactInterval');
        btn.classList.add('btnActive');
        startReload();
    }
}

export function startReload() {
    const params = new URLSearchParams();
    params.set('textContactActive', 'true');
    params.set('inputActive', 'true');
    params.set('btnActive', 'true')
    const url = `${location.pathname}?${params.toString()}`;
  
    location.replace(url);
  }

  document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(location.search);

    if (params.get('textContactActive') === 'true') {
      textContact.classList.add('textContactActive');
    }

    if (params.get('inputActive') === 'true') {
      contactInput.forEach(input => input.classList.add('inputActive'));
    }

    if (params.get('btnActive') === 'true') {
        btnBody.classList.add('btnActive');
    }
});