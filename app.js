// const formData = {};
// const thankyou = document.getElementById("tnk");
// // the Project buttons

// fetch(`./projectDesc.json`)
//   .then((res) => res.json())
//   .then((data) => {
//     const newEl = document.createElement("p");
//     newEl.innerHTML = `<p>'${data[0].ProjectOne}'</p>`;
//   });

// validateForm = (e) => {
//   e.preventDefault();
//   formData.Name = document.querySelector("#text").value;
//   formData.Email = document.querySelector("#email-in").value;
//   formData.Message = document.querySelector("#message").value;

//   if (!formData.Name) {
//     return alert("Name must be filled out");
//   } else if (formData.Email.indexOf("@") == -1) {
//     return alert("Email must be filled out");
//   } else if (!formData.Message) {
//     alert("Please write your message");
//   }
//   localStorage.setItem("person", formData);
//   localStorage.setItem("formData", JSON.stringify(formData));
//   thankyou.innerText = "Thanks your message was send";
// };
// document.querySelector(".send-btn").addEventListener("click", validateForm);

// the Hiden Modal
const modal = document.querySelector(".modal");
const overlayBlur = document.querySelector(".overlay");
const hireMe = document.querySelector(".hero-text-button");
const contactFormData = {};
const closeM = document.querySelector(".close-modal");
const validateB = document.querySelector(".validate-form");
const tnkyou = document.getElementById("thanks");

// open the MODAL
const openModal = function () {
  modal.classList.remove("hidden");
  overlayBlur.classList.remove("hidden");
};
hireMe.addEventListener("click", openModal);

// validate the form and Submit it
validateContactForm = () => {
  contactFormData.Name = document.forms["form1"]["first_name"].value;
  contactFormData.LastName = document.forms["form1"]["second_name"].value;
  contactFormData.Message = document.getElementById("contact-message").value;
  contactFormData.Email = document.getElementById("contact-email").value;

  if (!contactFormData.Name) {
    alert("Name must be filled out");
    return false;
  } else if (!contactFormData.LastName) {
    alert("Last Name must be filled out");
    return false;
  } else if (contactFormData.Email.indexOf("@") == -1) {
    alert("Email must be filled out");
    return false;
  } else if (!contactFormData.Message) {
    alert("Message must be filled out");
    return false;
  } else {
    tnkyou.textContent = "Thanks your message have been submited!";
  }
};

// close the Modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlayBlur.classList.add("hidden");
};
closeM.addEventListener("click", closeModal);
overlayBlur.addEventListener("click", closeModal);
