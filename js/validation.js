"use strict";

// Get the contact form 
const contactForm = document.getElementById("contact-form");

// Run only if the form exists
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    // Get the form fields
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const service = document.getElementById("service");
    const message = document.getElementById("message");
    const formSuccess = document.getElementById("form-success");

    let isValid = true;

    // Check all inputs
    if (firstName.value.trim() === "") {
      showError(firstName, "first-name-error", "Please enter your first name.");
      isValid = false;
    }

    if (lastName.value.trim() === "") {
      showError(lastName, "last-name-error", "Please enter your last name.");
      isValid = false;
    }

    if (!isValidEmail(email.value.trim())) {
      showError(email, "email-error", "Please enter a valid email address.");
      isValid = false;
    }

    if (phone.value.trim() === "") {
      showError(phone, "phone-error", "Please enter your phone number.");
      isValid = false;
    }

    if (service.value === "") {
      showError(service, "service-error", "Please choose a photography service.");
      isValid = false;
    }

    if (message.value.trim() === "") {
      showError(message, "message-error", "Please enter your message.");
      isValid = false;
    }

    // Show success message
    if (isValid) {
      formSuccess.textContent = "Thanks for reaching out! Your message is ready to be sent.";
      contactForm.reset();
    }
  });
}

// Show an error
function showError(field, errorId, message) {
  field.classList.add("is-invalid");
  document.getElementById(errorId).textContent = message;
}

// Clear old errors
function clearErrors() {
  const fields = contactForm.querySelectorAll(".form-control, .form-select");
  const errorMessages = contactForm.querySelectorAll(".error-message");

  fields.forEach(function (field) {
    field.classList.remove("is-invalid");
  });

  errorMessages.forEach(function (error) {
    error.textContent = "";
  });

  document.getElementById("form-success").textContent = "";
}

// Check email format
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}