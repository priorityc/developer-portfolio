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
// function myFunction1(x) {
//   x.classList.toggle("change");
// }
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

// Validate and submit the other form
const footerForm = {};
const thansMsg = document.getElementById("tnk");
validateFooterForm = () => {
  footerForm.text = document.forms["myform"]["text"].value;
  footerForm.email = document.forms["myform"]["email"].value;
  footerForm.message = document.getElementById("message").value;

  if (!footerForm.text) {
    alert("Name must be filled out");
    return false;
  } else if (!footerForm.email.indexOf("@") == -1) {
    alert("Email must be filled out");
    return false;
  } else if (!footerForm.message) {
    alert("Message must be filled out");
    return false;
  } else {
    thansMsg.textContent = "Thanks your message was send!";
  }
};
// the about me facts
// const rightBTN = document.querySelector(".right");
// const leftBTN = document.querySelector(".left");
// const hidendiv = document.querySelector(".text-left_one");
// const hidendiv2 = document.querySelector(".text-left_two");
// const textP = document.querySelector(".text-left");
// const hidendiv3 = document.querySelector(".text-left_three");
// let slideimages = new Array();
// let text = new ArrayBuffer();

// slideimages[0] = new Image();
// slideimages[0].src = "images-slide/house.jpg";

// slideimages[1] = new Image();
// slideimages[1].src = "images-slide/house.jpg";

// slideimages[2] = new Image();
// slideimages[2].src = "images-slide/new-career.jpg";
// text[0] = "";

// let step = 0;

// slide = () => {
//   document.querySelector(".warehouse").src = slideimages[step].src; //slideimages[0].src

//   if (step < 2) {
//     step++;
//   } else {
//     step = 0;
//   }
//   //hide text one and three and show text 2
//   hidendiv.classList.add("hidden-p"); //hide div
//   hidendiv3.classList.add("hidden-p");
//   // hide1
//   hidendiv3.classList.add("hidden-p");
//   hidendiv2.classList.remove("hidden-p"); //show 2
//   //hide 3
//   //show text 3 but hide two
//   hidendiv2.classList.add("hidden-p");
//   hidendiv3.classList.remove("hidden-p");
// };
// //hide 2

// rightBTN.addEventListener("click", slide);

// backslide = () => {
//   document.querySelector(".warehouse").src = slideimages[step].src;
//   if (step > 2) {
//     step--;
//   } else {
//     step = 0;
//   }
//   hidendiv.classList.add("hidden-p"); // hide1
//   hidendiv2.classList.remove("hidden-p"); //show 2

//   hidendiv3.classList.add("hidden-p"); //hide 3
//   hidendiv.classList.remove("hidden-p"); //show 1
//   hidendiv2.classList.add("hidden-p"); // 2

//   hidendiv.classList.remove("hidden-p");
// };
// leftBTN.addEventListener("click", backslide);

// The what I do function
// const header1 = document.querySelector(".header-1");
// const firstDiv = document.querySelector(".what-I-do");

// whatIdo = () => {
//   fetch(`./projectDesc.json`)
//     .then((res) => res.json())
//     .then((data) => {
//       document.querySelector(".header-1").style.display = "none";
//       document.getElementById("hidden").innerHTML = `<ol>
//       <li>'${data[1].WhatIdo}'</li>
//       <li>'${data[2].listone}'</li>
//       <li>'${data[3].listtwo}'</li></ol>`;
//     });
// };
// header1.addEventListener("mouseover", whatIdo);

// const buttonLeft = document.querySelector(".left");
// const buttonRight = document.querySelector(".right");
// const projectOne = document.querySelector(".div1");
// const projectTwo = document.querySelector(".div2");

// slideproject = () => {
//   projectTwo.classList.remove("hidden-div");
//   projectOne.classList.add("hidden-div");
// };
// buttonRight.addEventListener("click", slideproject);
