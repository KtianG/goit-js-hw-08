import _ from 'lodash';

const feedbackForm = document.querySelector('form.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const button = document.querySelector('button[type="submit"]');

const feedbackFormState = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state'))
  : '';

//Śledź w formularzu zdarzenie input,
//i za każdym razem zapisuj w local storage obiekt z polami email i message,
//w których przechowuj aktualne wartości pól formularza.
//Niech kluczem do storage będzie "feedback-form-state"
const inputHandler = () => {
  const emailState = email.value;
  const messageState = message.value;
  const state = { email: emailState, message: messageState };

  localStorage.setItem('feedback-form-state', JSON.stringify(state));
};

//Po wysłaniu formularza wyczyść storage i pola formularza,
//a także wprowadź obiekt z polami email, message
//i ich aktualnymi wartościami do wiersza poleceń.
const submitHandler = event => {
  event.preventDefault();
  const sendData = { email: email.value, message: message.value };
  console.log(sendData);

  email.value = '';
  message.value = '';
  localStorage.removeItem('feedback-form-state');
};

//Podczas przeładowywania strony sprawdzaj stan storage
//i jeśli są tam zapisane dane, wypełniaj nimi pola formularza.
//W przeciwnym wypadku pola powinny być puste.
const checkStorage = () => {
  if (feedbackFormState.email) {
    email.value = feedbackFormState.email;
  }
  if (feedbackFormState.message) {
    message.value = feedbackFormState.message;
  }
};

checkStorage();
//Zrób tak, aby storage aktualizował się nie częściej niż raz na 500 milisekund.
feedbackForm.addEventListener('input', _.throttle(inputHandler, 500));
button.addEventListener('click', submitHandler);
