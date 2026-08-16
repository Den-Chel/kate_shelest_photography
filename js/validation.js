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
    const formSuccess = document.getElementById("form-success");

    let isValid = true;

    // Validate first name
    if (firstName.value.trim() === "") {
      showError(
        firstName,
        "first-name-error",
        "Please enter your first name."
      );
      isValid = false;
    } else if (!isValidName(firstName.value.trim())) {
      showError(
        firstName,
        "first-name-error",
        "Please use letters only for your first name."
      );
      isValid = false;
    }

    // Validate last name
    if (lastName.value.trim() === "") {
      showError(
        lastName,
        "last-name-error",
        "Please enter your last name."
      );
      isValid = false;
    } else if (!isValidName(lastName.value.trim())) {
      showError(
        lastName,
        "last-name-error",
        "Please use letters only for your last name."
      );
      isValid = false;
    }

    // Validate email
    if (email.value.trim() === "") {
      showError(
        email,
        "email-error",
        "Please enter your email address."
      );
      isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
      showError(
        email,
        "email-error",
        "Please enter a correct email address."
      );
      isValid = false;
    }

    // Validate phone number
    if (phone.value.trim() === "") {
      showError(
        phone,
        "phone-error",
        "Please enter your phone number."
      );
      isValid = false;
    } else if (!isValidPhone(phone.value.trim())) {
      showError(
        phone,
        "phone-error",
        "Please enter a correct phone number."
      );
      isValid = false;
    }

    // Validate photography service
    if (service.value === "") {
      showError(
        service,
        "service-error",
        "Please choose a photography session you are interested in."
      );
      isValid = false;
    }

    // Show success message
    if (isValid) {
      formSuccess.textContent =
        "Thanks for reaching out! Your message has been sent.";

      contactForm.reset();
    }
  });
}

// Show an error
function showError(field, errorId, message) {
  field.classList.add("is-invalid");

  const errorElement = document.getElementById(errorId);

  if (errorElement) {
    errorElement.textContent = message;
  }
}

// Clear old errors
function clearErrors() {
  const fields = contactForm.querySelectorAll(
    ".form-control, .form-select"
  );

  const errorMessages =
    contactForm.querySelectorAll(".error-message");

  fields.forEach(function (field) {
    field.classList.remove("is-invalid");
  });

  errorMessages.forEach(function (error) {
    error.textContent = "";
  });

  document.getElementById("form-success").textContent = "";
}

// Check the name format
function isValidName(name) {
  const namePattern = /^[\p{L}]+(?:[ '\u2019-][\p{L}]+)*$/u;

  return namePattern.test(name);
}

// Check email format
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

// Check phone format and require 7–15 digits
function isValidPhone(phone) {
  const allowedCharacters = /^\+?[\d\s().-]+$/;

  if (!allowedCharacters.test(phone)) {
    return false;
  }

  const digitsOnly = phone.replace(/\D/g, "");

  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
}