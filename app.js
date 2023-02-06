// use small tag to show the error message
// if input not valid make color border redby adding error classto the form field
// if input is valid add green border like adding sucess class

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    x.classList.toggle("change");
  } else {
    x.style.display = "block";
  }
}
// the Hiden Modal
const modal = document.querySelector(".modal");
const overlayBlur = document.querySelector(".overlay");
const hireMe = document.querySelector(".hero-text-button");
let contactFormData = {};
const closeM = document.querySelector(".close-modal");
const validateB = document.querySelector(".validate-form");
const tnkyou = document.getElementById("thanks");

// open the MODAL
const openModal = function () {
  modal.classList.remove("hidden");
  overlayBlur.classList.remove("hidden");
};
hireMe.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlayBlur.classList.add("hidden");
};
closeM.addEventListener("click", closeModal);
overlayBlur.addEventListener("click", closeModal);

//collect the data
const nameEl = document.querySelector("#first-name");
const lastnameEl = document.querySelector("#last-name");
const emailEl = document.querySelector("#email");
const messageEl = document.querySelector("#message");

const formEl = document.getElementById("#form");

// attach submit event to the form
formEl.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();
});
// The following isRequired() function returns true if the input argument is empty:
const isRequired = (value) => (value === "" ? false : true);
// The following isBetween() function returns false if the length argument is not between the min and max argument:
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;
// check if the email is valid with regular expresion
const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

/* ^	The password starts
(?=.*[a-z])	The password must contain at least one lowercase character
(?=.*[A-Z])	The password must contain at least one uppercase character
(?=.*[0-9])	The password must contain at least one number
(?=.*[!@#$%^&*])	The password must contain at least one special character.
(?=.{8,})	The password must be eight characters or longer*/

// The function that showError() function highlights the border of the input field and displays an error message if the input field is invalid:
const showError = (input, message) => {
  // get the perent element of the input field which is the div el
  const formField = input.parentElement;
  //Second, remove the success class and add the error class to the form-field element:
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

// Same function for Sucess
const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

// VALIDATION inputs
const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const nameE = nameEl.value.trim();

  if (!isRequired(nameE)) {
    showError(nameEl, "Username cannot be blank.");
  } else if (!isBetween(nameE.length, min, max)) {
    showError(nameEl, `Name must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(nameEl);
    valid = true;
  }
  // return true if passes
  return valid;
};

const chacklastName = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const lastnameE = lastnameEl.value.trim();
  if (!isRequired(lastnameE)) {
    showError(lastnameEl, "Last name cannot be blank.");
  } else if (!isBetween(lastnameE.length, min, max)) {
    showError(
      lastnameEl,
      `Last name  must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(lastnameEl);
    valid = true;
  }
  // return true if passes
  return valid;
};

// validate email field
const checkEmail = () => {
  // initial default state
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const chackMessage = () => {
  let valid = false;
  const min = 3,
    max = 40;
  const messageE = messageEl.value.trim();
  if (!isRequired(messageE)) {
    showError(messageEl, "Message cannot be blank.");
  } else if (!isBetween(messageE.length, min, max)) {
    showError(
      messageEl,
      `Message must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(messageEl);
    valid = true;
  }
  // return true if passes
  return valid;
};

// Modify the submit event handler
const validateModal = () => {
  // validate forms
  let isnameValid = checkUsername(),
    islastnameValid = chacklastName(),
    isEmailValid = checkEmail(),
    isMessageValid = chackMessage();

  let isFormValid =
    isnameValid && islastnameValid && isEmailValid && isMessageValid;

  // submit to the server if the form is valid
  // Finally, submit data to the server if the form is valid specified the isFormValid flag.
  if (isFormValid) {
    formEl.submit();
  }
};
formEl.addEventListener("submit", validateModal);

// validate the footer form
// elements
const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");
const messageInput = document.getElementById("contact-message");
const submitBTN = document.getElementById("save");
// the form
const foterForm = document.getElementById("form-footer");

/// attach submit event to the form
foterForm.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();
});
// The following isRequired() function returns true if the input argument is empty:
const isRequired2 = (value) => (value === "" ? false : true);
// The following isBetween() function returns false if the length argument is not between the min and max argument:
const isBetween2 = (length, min, max) =>
  length < min || length > max ? false : true;
// check if the email is valid with regular expresion
const isEmailValid2 = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// The function that showError() function highlights the border of the input field and displays an error message if the input field is invalid:
const showError2 = (input, message) => {
  // get the perent element of the input field which is the div el
  const formField2 = input.parentElement;
  //Second, remove the success class and add the error class to the form-field element:
  formField2.classList.remove("success");
  formField2.classList.add("error");

  // show the error message
  const error = formField2.querySelector("small");
  error.textContent = message;
};

//Same function for Sucess
const showSuccess2 = (input) => {
  // get the form-field element
  const formField2 = input.parentElement;

  // remove the error class
  formField2.classList.remove("error");
  formField2.classList.add("success");

  // hide the error message
  const error = formField2.querySelector("small");
  error.textContent = "";
};

const checkUsername2 = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const nameE = nameInput.value.trim();

  if (!isRequired2(nameE)) {
    showError(nameInput, "Username cannot be blank.");
  } else if (!isBetween(nameE.length, min, max)) {
    showError(nameInput, `Name must be between ${min} and ${max} characters.`);
  } else {
    showSuccess2(nameInput);
    valid = true;
  }
  // return true if passes
  return valid;
};

const checkEmail2 = () => {
  // initial default state
  let valid = false;
  const email = emailInput.value.trim();
  if (!isRequired2(email)) {
    showError2(emailInput, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError2(emailInput, "Email is not valid.");
  } else {
    showSuccess2(emailInput);
    valid = true;
  }
  return valid;
};

const chackMessage2 = () => {
  let valid = false;
  const min = 3,
    max = 40;
  const messageE = messageInput.value.trim();
  if (!isRequired2(messageE)) {
    showError2(messageInput, "Message cannot be blank.");
  } else if (!isBetween2(messageE.length, min, max)) {
    showError2(
      messageEl,
      `Message must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess2(messageInput);
    valid = true;
  }
  // return true if passes
  return valid;
};

// Modify the submit event handler
const validateFooter = () => {
  // validate forms
  let isnameValid = checkUsername2(),
    isEmailValid = checkEmail2(),
    isMessageValid = chackMessage2();

  let isFormValid = isnameValid && isEmailValid && isMessageValid;

  // submit to the server if the form is valid
  // Finally, submit data to the server if the form is valid specified the isFormValid flag.
  if (isFormValid) {
    foterForm.submit();
  }
};
submitBTN.addEventListener("submit", validateFooter);
//   // return true if passes
//   return valid;
// };

// const validateFooterForm = () => {
//   // prevent the form from submitting

//   // validate forms
//   let isnameValid = checkName(),
//     isEmailValid = checkEmaill(),
//     isMessageValid = chackMessages();

//   let isFooterFormValid = isnameValid && isEmailValid && isMessageValid;

//   // submit to the server if the form is valid
//   // Finally, submit data to the server if the form is valid specified the isFormValid flag.
//   if (isFooterFormValid) {
//     foterForm.submit();
//   }
// };
// foterForm.addEventListener("submit", validateFooterForm);

//declare two patterns
