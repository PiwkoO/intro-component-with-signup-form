const formElem = document.querySelector('.form');
const emailValidation = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g);
const EMPTY_EMAIL = 'Email cannot be empty';
const INVALID_EMAIL = 'Looks like this is not an email';

const validateInput = input => {
    if (input.value.trim() === '') {
        input.classList.add('form-error');
        input.labels[0].classList.add('form-error');
    } else if (input.id === 'email' && !input.value.match(emailValidation)) {
        input.labels[0].textContent = INVALID_EMAIL;
    } else if (input.id === 'email' && input.value.trim() === '') {
        input.labels[0].textContent = EMPTY_EMAIL;
    } else {
        input.classList.remove('form-error');
        input.labels[0].classList.remove('form-error');
    }
};

formElem.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputElements = formElem.querySelectorAll('input:not(.form-submit)');

    inputElements.forEach(input => validateInput(input));

    if (!document.querySelector('.form-error')) {
        inputElements.forEach(input => input.value = '');
        formElem.classList.add('show-message');

        setTimeout(() => formElem.classList.remove('show-message'), 2000);
    }
});