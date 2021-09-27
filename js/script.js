const btn = document.querySelector("label button");
const inputEmail = document.querySelector("input");
const errorMsg = document.querySelector(".validation-msg p.error-msg");
const successMsg = document.querySelector(".validation-msg p.success-msg");

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!inputEmail.value) {
    errorMsg.textContent = "Ombre! Where is your email?";
  } else if (!validateEmail(inputEmail.value)) {
    errorMsg.textContent = "Oooops! Please check your email!";
  } else {
    errorMsg.textContent = "";
    inputEmail.value = "";
    setTimeout(function () {
      successMsg.textContent = "";
    }, 1000);
    successMsg.textContent = "Thank you, we will contact you soon";
  }
});
