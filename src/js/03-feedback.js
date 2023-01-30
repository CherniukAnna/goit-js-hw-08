import throttle from 'lodash.throttle';

const emailInputEl = document.querySelector('input');
const msgInputEl = document.querySelector('textarea');
const formEl = document.querySelector('form');

const formBtm = document.querySelector('button');
const STORAGE_KEY = 'feedback-form-state';

populateTextarea();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('send form');

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: formEl.email.value,
      message: formEl.message.value,
    })
  );
}

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     console.log(savedMessage);
//     msgInputEl.value = savedMessage;
//     emailInputEl.value = savedMessage;
//   }
// }

// //

function populateTextarea() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    emailInputEl.value = savedData.email.trim();
    msgInputEl.value = savedData.message.trim();
  }
}
