const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorMessage = document.querySelector("em");
const lastNameError= document.querySelector(".lastname_value");
const emailError = document.querySelector(".email_value");
const passwordError = document.querySelector(".password_value");
const errorImage = document.querySelector(".error_icon");
const lastNameErrorImage = document.querySelector(".error_icon2");
const emailErrorImage = document.querySelector(".error_icon3");
const showPassword = document.querySelector(".error_icon4");
// const closePassword = document.querySelector(".fa-eye-slash");
console.log(firstName);
console.log(lastName);
console.log(email);
console.log(password);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  console.log(fName);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorMessage.innerHTML = "First Name cannot be empty";
    errorMessage.classList.add('error');
    errorImage.classList.remove("hide");
    
  } else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    lastNameError.innerHTML = "Last Name cannot be empty";
    lastNameError.classList.add('error');
    lastNameErrorImage.classList.remove("hide");
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailError.innerHTML = "Looks like this is not an email";
    emailError.classList.add('error');
    emailErrorImage.classList.remove("hide");
  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    passwordError.innerHTML = "Password cannot be empty";
    passwordError.classList.add('error');
  } else {
    password.classList.remove('error');
  }
});

// Validate Password

showPassword.addEventListener("click", function() {
 if (password.type == "password") {
  password.type = "text";
  showPassword.src = "./images/eye-slash-regular.svg";
 } else {
  password.type = "password";
  showPassword.src = "./images/eye-regular.svg";
 }
})

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}