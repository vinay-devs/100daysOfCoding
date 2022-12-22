function validateEmail() {
  const message = document.querySelector(".field-input span");
  const icon = document.querySelector(".field-input i");
  const emailValue = document.querySelector("#email").value;
  const emailRegex = /^\w+@[a-zA-z]+?\.[a-zA-z]{2,3}$/;

  if (emailValue.match(emailRegex)) {
    message.classList.remove("invalid");
    message.classList.add("valid");
    message.textContent = "valid";
    icon.classList.remove("fa-exclamation-circle");
    icon.classList.add("fa-check-circle");
  } else {
    message.classList.add("invalid");
    message.classList.remove("valid");
    message.innerHTML = "No Valid Email";
    icon.classList.add("fa-exclamation-circle");
    icon.classList.remove("fa-check-circle");
  }

  if (emailValue === "") {
    message.innerHTML = "";
    message.style.opacity = 0;
    icon.classList.remove("fa-exclamation-circle");
  } else {
    message.style.opacity = 1;
  }
}
