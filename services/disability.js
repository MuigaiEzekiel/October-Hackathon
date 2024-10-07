const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
//registration form
let emailError = document.getElementById("emailError");
let ageError = document.getElementById("ageError");
let passwordOneError = document.getElementById("passwordError");
let sexError = document.getElementById("sexError");
let agreeError = document.getElementById("agreeError");
let nameError = document.getElementById("nameError");
const registrationFormHide = document.querySelector(
  ".registration--form--hide"
);
const errorMessage = document.querySelector(".error--message");
const emailOne = document.getElementById("email1");
const passwordOne = document.getElementById("password1");
const ageOne = document.getElementById("age1");
const sexM = document.getElementById("sexM");
const sexF = document.getElementById("sexF");
const registrationFormContainer = document.getElementById(
  "registration--form--container"
);
const nativeCountry = document.getElementById("native--country");
const termsOne = document.getElementById("terms1");
const lastN = document.getElementById("lastN");
const fullN = document.getElementById("fullN");
const fullNameOne = document.getElementById("fullname1");
const passWordR = document.getElementById("passWordR");
const registrationSubmitBtn = document.querySelector(
  ".registration--submit--btn"
);
registrationSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("submit");
  emailError.classList.add("hidden");
  let ageOneNum = parseInt(ageOne.value);
  if (!fullNameOne.value) {
    nameError.classList.remove("hidden");
  } else {
    console.log(fullNameOne.value);
    nameError.classList.add("hidden");
  }
  if (ageOneNum >= 18 && ageOneNum <= 100) {
    ageError.classList.add("hidden");
  } else {
    ageError.classList.remove("hidden");
  }
  if (!emailOne.value) {
    emailError.classList.remove("hidden");
  } else {
    emailError.classList.add("hidden");
  }
  let passwordOneNum = parseInt(passwordOne.value);
  if (!passwordOneNum || passwordOneNum.length < 8) {
    passwordOneError.classList.remove("hidden");
  } else {
    passwordOneError.classList.add("hidden");
  }
  if (!sexM.checked && !sexF.checked) {
    sexError.classList.remove("hidden");
  } else {
    sexError.classList.add("hidden");
    if (sexM.checked) {
      console.log(sexM.value);
    } else {
      console.log(sexF.value);
    }
  }
  if (!termsOne.checked) {
    agreeError.classList.remove("hidden");
  } else {
    agreeError.classList.add("hidden");
  }
});
//
