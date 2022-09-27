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

const closeM = document.querySelector(".close-modal");

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
// Set up a thank you message
const btnSubmit = document.querySelector(".hero-text-btn");
const tnkyou = document.getElementById("thanks");
console.log(tnkyou);

const sayThanks = function () {
  console.log(`Thanks`);
  tnkyou.textContent = `Thank you your message have been send!`;
};
btnSubmit.addEventListener("click", sayThanks);
