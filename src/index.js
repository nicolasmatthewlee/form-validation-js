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
const emailErrorContainer = createElement('div', 'error-container');
const emailErrorLabel = createElement('div', 'error-label', 'error');
emailErrorContainer.append(emailErrorLabel);
emailContainer.append(emailLabel, emailInput, emailErrorContainer);

const countryContainer = createElement('div', 'container country-container');
const countryLabel = createElement('div', 'country-label', 'Country');
const countryInput = createElement('select', 'country-input');
const countryOptions = [
  ' Afghanistan ',
  ' Ã…land Islands ',
  ' Albania ',
  ' Algeria ',
  ' American Samoa ',
  ' Andorra ',
  ' Angola ',
  ' Anguilla ',
  ' Antarctica ',
  ' Antigua and Barbuda ',
  ' Argentina ',
  ' Armenia ',
  ' Aruba ',
  ' Australia ',
  ' Austria ',
  ' Azerbaijan ',
  ' Bahamas ',
  ' Bahrain ',
  ' Bangladesh ',
  ' Barbados ',
  ' Belarus ',
  ' Belgium ',
  ' Belize ',
  ' Benin ',
  ' Bermuda ',
  ' Bhutan ',
  ' Bolivia, Plurinational State of ',
  ' Bonaire, Sint Eustatius and Saba ',
  ' Bosnia and Herzegovina ',
  ' Botswana ',
  ' Bouvet Island ',
  ' Brazil ',
  ' British Indian Ocean Territory ',
  ' Brunei Darussalam ',
  ' Bulgaria ',
  ' Burkina Faso ',
  ' Burundi ',
  ' Cambodia ',
  ' Cameroon ',
  ' Canada ',
  ' Cape Verde ',
  ' Cayman Islands ',
  ' Central African Republic ',
  ' Chad ',
  ' Chile ',
  ' China ',
  ' Christmas Island ',
  ' Cocos (Keeling) Islands ',
  ' Colombia ',
  ' Comoros ',
  ' Congo ',
  ' Congo, the Democratic Republic of the ',
  ' Cook Islands ',
  ' Costa Rica ',
  " CÃ´te d'Ivoire ",
  ' Croatia ',
  ' Cuba ',
  ' CuraÃ§ao ',
  ' Cyprus ',
  ' Czech Republic ',
  ' Denmark ',
  ' Djibouti ',
  ' Dominica ',
  ' Dominican Republic ',
  ' Ecuador ',
  ' Egypt ',
  ' El Salvador ',
  ' Equatorial Guinea ',
  ' Eritrea ',
  ' Estonia ',
  ' Ethiopia ',
  ' Falkland Islands (Malvinas) ',
  ' Faroe Islands ',
  ' Fiji ',
  ' Finland ',
  ' France ',
  ' French Guiana ',
  ' French Polynesia ',
  ' French Southern Territories ',
  ' Gabon ',
  ' Gambia ',
  ' Georgia ',
  ' Germany ',
  ' Ghana ',
  ' Gibraltar ',
  ' Greece ',
  ' Greenland ',
  ' Grenada ',
  ' Guadeloupe ',
  ' Guam ',
  ' Guatemala ',
  ' Guernsey ',
  ' Guinea ',
  ' Guinea-Bissau ',
  ' Guyana ',
  ' Haiti ',
  ' Heard Island and McDonald Islands ',
  ' Holy See (Vatican City State) ',
  ' Honduras ',
  ' Hong Kong ',
  ' Hungary ',
  ' Iceland ',
  ' India ',
  ' Indonesia ',
  ' Iran, Islamic Republic of ',
  ' Iraq ',
  ' Ireland ',
  ' Isle of Man ',
  ' Israel ',
  ' Italy ',
  ' Jamaica ',
  ' Japan ',
  ' Jersey ',
  ' Jordan ',
  ' Kazakhstan ',
  ' Kenya ',
  ' Kiribati ',
  " Korea, Democratic People's Republic of ",
  ' Korea, Republic of ',
  ' Kuwait ',
  ' Kyrgyzstan ',
  " Lao People's Democratic Republic ",
  ' Latvia ',
  ' Lebanon ',
  ' Lesotho ',
  ' Liberia ',
  ' Libya ',
  ' Liechtenstein ',
  ' Lithuania ',
  ' Luxembourg ',
  ' Macao ',
  ' Macedonia, the Former Yugoslav Republic of ',
  ' Madagascar ',
  ' Malawi ',
  ' Malaysia ',
  ' Maldives ',
  ' Mali ',
  ' Malta ',
  ' Marshall Islands ',
  ' Martinique ',
  ' Mauritania ',
  ' Mauritius ',
  ' Mayotte ',
  ' Mexico ',
  ' Micronesia, Federated States of ',
  ' Moldova, Republic of ',
  ' Monaco ',
  ' Mongolia ',
  ' Montenegro ',
  ' Montserrat ',
  ' Morocco ',
  ' Mozambique ',
  ' Myanmar ',
  ' Namibia ',
  ' Nauru ',
  ' Nepal ',
  ' Netherlands ',
  ' New Caledonia ',
  ' New Zealand ',
  ' Nicaragua ',
  ' Niger ',
  ' Nigeria ',
  ' Niue ',
  ' Norfolk Island ',
  ' Northern Mariana Islands ',
  ' Norway ',
  ' Oman ',
  ' Pakistan ',
  ' Palau ',
  ' Palestine, State of ',
  ' Panama ',
  ' Papua New Guinea ',
  ' Paraguay ',
  ' Peru ',
  ' Philippines ',
  ' Pitcairn ',
  ' Poland ',
  ' Portugal ',
  ' Puerto Rico ',
  ' Qatar ',
  ' RÃ©union ',
  ' Romania ',
  ' Russian Federation ',
  ' Rwanda ',
  ' Saint BarthÃ©lemy ',
  ' Saint Helena, Ascension and Tristan da Cunha ',
  ' Saint Kitts and Nevis ',
  ' Saint Lucia ',
  ' Saint Martin (French part) ',
  ' Saint Pierre and Miquelon ',
  ' Saint Vincent and the Grenadines ',
  ' Samoa ',
  ' San Marino ',
  ' Sao Tome and Principe ',
  ' Saudi Arabia ',
  ' Senegal ',
  ' Serbia ',
  ' Seychelles ',
  ' Sierra Leone ',
  ' Singapore ',
  ' Sint Maarten (Dutch part) ',
  ' Slovakia ',
  ' Slovenia ',
  ' Solomon Islands ',
  ' Somalia ',
  ' South Africa ',
  ' South Georgia and the South Sandwich Islands ',
  ' South Sudan ',
  ' Spain ',
  ' Sri Lanka ',
  ' Sudan ',
  ' Suriname ',
  ' Svalbard and Jan Mayen ',
  ' Swaziland ',
  ' Sweden ',
  ' Switzerland ',
  ' Syrian Arab Republic ',
  ' Taiwan, Province of China ',
  ' Tajikistan ',
  ' Tanzania, United Republic of ',
  ' Thailand ',
  ' Timor-Leste ',
  ' Togo ',
  ' Tokelau ',
  ' Tonga ',
  ' Trinidad and Tobago ',
  ' Tunisia ',
  ' Turkey ',
  ' Turkmenistan ',
  ' Turks and Caicos Islands ',
  ' Tuvalu ',
  ' Uganda ',
  ' Ukraine ',
  ' United Arab Emirates ',
  ' United Kingdom ',
  ' United States ',
  ' United States Minor Outlying Islands ',
  ' Uruguay ',
  ' Uzbekistan ',
  ' Vanuatu ',
  ' Venezuela, Bolivarian Republic of ',
  ' Viet Nam ',
  ' Virgin Islands, British ',
  ' Virgin Islands, U.S. ',
  ' Wallis and Futuna ',
  ' Western Sahara ',
  ' Yemen ',
  ' Zambia ',
  ' Zimbabwe '
];
for (let country of countryOptions) {
  let selectOption = createElement('option', 'select-option', country);
  selectOption.value = country;
  countryInput.append(selectOption);
}

countryContainer.append(countryLabel, countryInput);

const zipCodeContainer = createElement('div', 'container zip-code-container');
const zipCodeLabel = createElement('div', 'zip-code-label', 'Zip Code');
const zipCodeInput = createElement('input', 'zip-code-input');
const zipCodeErrorContainer = createElement('div', 'error-container');
const zipCodeErrorLabel = createElement('div', 'error-label', 'error');
zipCodeErrorContainer.append(zipCodeErrorLabel);
zipCodeContainer.append(zipCodeLabel, zipCodeInput, zipCodeErrorContainer);

const passwordContainer = createElement('div', 'container password-container');
const passwordLabel = createElement('div', 'password-label', 'Password');
const passwordInput = createElement('input', 'password-input');
const passwordErrorContainer = createElement('div', 'error-container');
const passwordErrorLabel = createElement('div', 'error-label', 'error');
passwordErrorContainer.append(passwordErrorLabel);
passwordContainer.append(passwordLabel, passwordInput, passwordErrorContainer);

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
const confirmPasswordErrorContainer = createElement('div', 'error-container');
const confirmPasswordErrorLabel = createElement('div', 'error-label', 'error');
confirmPasswordErrorContainer.append(confirmPasswordErrorLabel);
confirmPasswordContainer.append(
  confirmPasswordLabel,
  confirmPasswordInput,
  confirmPasswordErrorContainer
);

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

// form validation

emailInput.addEventListener('input', () => {
  if (!(emailInput.value == '')) {
    emailErrorContainer.classList.add('active');
  } else {
    emailErrorContainer.classList.remove('active');
  }
});

zipCodeInput.addEventListener('input', () => {
  if (!(zipCodeInput.value == '')) {
    zipCodeErrorContainer.classList.add('active');
  } else {
    zipCodeErrorContainer.classList.remove('active');
  }
});

passwordInput.addEventListener('input', () => {
  if (!(passwordInput.value == '')) {
    passwordErrorContainer.classList.add('active');
  } else {
    passwordErrorContainer.classList.remove('active');
  }
});

confirmPasswordInput.addEventListener('input', () => {
  if (!(confirmPasswordInput.value == '')) {
    confirmPasswordErrorContainer.classList.add('active');
  } else {
    confirmPasswordErrorContainer.classList.remove('active');
  }
});
