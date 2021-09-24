const btn = document.querySelector("label button");
const inputEmail = document.querySelector("input");
const errorMsg = document.querySelector(".validation-msg p");

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

btn.addEventListener("click", function () {
  if (!validateEmail(inputEmail.value)) {
    errorMsg.textContent = "Oooops! Please check your email!";
    return;
  }
});
