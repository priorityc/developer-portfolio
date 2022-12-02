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

const form = document.querySelector("#form");

// attach submit event to the form
form.addEventListener("submit", function (e) {
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

const sendEmail = () => {
  form.setAttribute("action", "mailto:petya83dimitrova@gmail.com");
};

// Modify the submit event handler
const validateModal = (e) => {
  // prevent the form from submitting
  e.preventDefault();

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
    sendEmail();
  }
};
form.addEventListener("submit", validateModal);

// validate the footer form
const nameData = document.getElementById("contact-name").value;
const emailData = document.getElementById("contact-email").value;
const messageData = document.getElementById("contact-message").value;
console.log(nameData);

validateFooterForm = (e) => {
  e.preventDefault();

  if (nameData === "") {
    return alert("Please write your name!");
  }
};
