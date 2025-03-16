const menuButton = document.querySelector(".menu-btn");
const closeButton = document.querySelector(".close-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
const getStartedForm = document.querySelector(".get-started-form");
const emailInput = document.querySelector(".email-input");

// Showing the Menu
menuButton.addEventListener("click", () => {
  dropDownMenu.classList.add("active");
});

// Hiding the Menu
closeButton.addEventListener("click", () => {
  dropDownMenu.classList.remove("active");
});

// Checking for valid Email
getStartedForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    // If input is empty, show warning
    emailInput.classList.add("warning");
    emailInput.placeholder = "Enter an email";
  } else if (!emailRegex.test(emailValue)) {
    // If input is invalid, show error
    emailInput.classList.remove("warning");
    emailInput.classList.add("invalid");
    emailInput.placeholder = "Invalid email";
  }

  emailInput.value = "";
});

// Remove warning/error on focus
emailInput.addEventListener("focus", () => {
  emailInput.classList.remove("warning", "invalid");
  emailInput.placeholder = "example@gmail.com";
});
