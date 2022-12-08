import './reset.css';
import './styles.css';

const root = document.querySelector(':root');
const body = document.querySelector('body');

// helper method
const createElement = (type, className, content = '') => {
  let element = document.createElement(type);
  element.setAttribute('class', className);
  element.textContent = content;
  return element;
};

// set innerHeight and innerWidth
const setHeight = () => {
  root.style.setProperty('--innerHeight', window.innerHeight + 'px');
};
const setWidth = () => {
  root.style.setProperty('--innerWidth', window.innerWidth + 'px');
};
window.addEventListener('resize', () => {
  setHeight();
  setWidth();
});

// form structure
const form = createElement('form', 'form');

const formTitle = createElement('div', 'form-title', 'Sign Up');

const loginContainer = createElement('div', 'login-container');
const loginText = createElement('div', 'login-text', 'Have an account?');
const loginLink = createElement('a', 'login-link', 'Login');
loginLink.href = '';
loginContainer.append(loginText, loginLink);

const emailContainer = createElement('div', 'container email-container');
const emailLabel = createElement('div', 'email-label', 'Email Address');
const emailInput = createElement('input', 'email-input');
emailContainer.append(emailLabel, emailInput);

const countryContainer = createElement('div', 'container country-container');
const countryLabel = createElement('div', 'country-label', 'Country');
const countryInput = createElement('input', 'country-input');
countryContainer.append(countryLabel, countryInput);

const zipCodeContainer = createElement('div', 'container zip-code-container');
const zipCodeLabel = createElement('div', 'zip-code-label', 'Zip Code');
const zipCodeInput = createElement('input', 'zip-code-input');
zipCodeContainer.append(zipCodeLabel, zipCodeInput);

const passwordContainer = createElement('div', 'container password-container');
const passwordLabel = createElement('div', 'password-label', 'Password');
const passwordInput = createElement('input', 'password-input');
passwordContainer.append(passwordLabel, passwordInput);

const confirmPasswordContainer = createElement(
  'div',
  'container confirm-password-container'
);
const confirmPasswordLabel = createElement(
  'div',
  'confirm-password-label',
  'Confirm Password'
);
const confirmPasswordInput = createElement('input', 'confirm-password-input');
confirmPasswordContainer.append(confirmPasswordLabel, confirmPasswordInput);

const submitButtonContainer = createElement('div', 'submit-button-container');
const submitButton = createElement('button', 'submit-button', 'Submit');
submitButtonContainer.append(submitButton);

form.append(
  formTitle,
  loginContainer,
  emailContainer,
  countryContainer,
  zipCodeContainer,
  passwordContainer,
  confirmPasswordContainer,
  submitButtonContainer
);

body.append(form);
