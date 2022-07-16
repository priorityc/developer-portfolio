const formData = {};
const thankyou = document.getElementById("tnk");

validateForm = (e) => {
  e.preventDefault();
  formData.Name = document.querySelector("#text").value;
  formData.Email = document.querySelector("#email-in").value;
  formData.Message = document.querySelector("#message").value;

  if (!formData.Name) {
    return alert("Name must be filled out");
  } else if (formData.Email.indexOf("@") == -1) {
    return alert("Email must be filled out");
  } else if (!formData.Message) {
    alert("Please write your message");
  }
  localStorage.setItem("person", formData);
  localStorage.setItem("formData", JSON.stringify(formData));
  thankyou.innerText = "Thanks your message was send";
};
document.querySelector(".send-btn").addEventListener("click", validateForm);
