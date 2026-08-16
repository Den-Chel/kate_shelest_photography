"use strict";

// Get the review form
const reviewForm = document.getElementById("review-form");

// Run only if the form exists
if (reviewForm) {
  reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearReviewErrors();

    // Get the form fields
    const firstName = document.getElementById("review-name");
    const lastName = document.getElementById("review-last-name");
    const session = document.getElementById("review-session");
    const rating = document.getElementById("review-rating");
    const message = document.getElementById("review-message");
    const reviewSuccess = document.getElementById("review-success");

    let isValid = true;

    // Validate first name
    if (firstName.value.trim() === "") {
      showReviewError(
        firstName,
        "review-name-error",
        "Please enter your first name."
      );
      isValid = false;
    } else if (!isValidReviewName(firstName.value.trim())) {
      showReviewError(
        firstName,
        "review-name-error",
        "Please use letters only for your first name."
      );
      isValid = false;
    }

    // Validate last name 
    if (
        lastName.value.trim() !== "" &&
        !isValidReviewName(lastName.value.trim())) {
        showReviewError(
        lastName,
        "review-last-name-error",
        "Please use letters only for your last name."
      );
      isValid = false;
    }

    // Validate photography session
    if (session.value === "") {
      showReviewError(
        session,
        "review-session-error",
        "Please choose a photography session."
      );
      isValid = false;
    }

    // Validate rating
    if (rating.value === "") {
      showReviewError(
        rating,
        "review-rating-error",
        "Please choose a rating."
      );
      isValid = false;
    }

    // Validate review message
    if (message.value.trim() === "") {
      showReviewError(
        message,
        "review-message-error",
        "Please write your review."
      );
      isValid = false;
    }

    // Show success message
    if (isValid) {
      reviewSuccess.textContent =
        "Thank you for sharing your experience!";

      reviewForm.reset();
    }
  });
}

// Show an error
function showReviewError(field, errorId, message) {
  field.classList.add("is-invalid");

  const errorElement = document.getElementById(errorId);

  if (errorElement) {
    errorElement.textContent = message;
  }
}

// Clear old errors
function clearReviewErrors() {
  const fields = reviewForm.querySelectorAll(
    ".form-control, .form-select"
  );

  const errorMessages =
    reviewForm.querySelectorAll(".error-message");

  fields.forEach(function (field) {
    field.classList.remove("is-invalid");
  });

  errorMessages.forEach(function (error) {
    error.textContent = "";
  });

  const reviewSuccess =
    document.getElementById("review-success");

  if (reviewSuccess) {
    reviewSuccess.textContent = "";
  }
}

// Check the name format
function isValidReviewName(name) {
  const namePattern =
    /^[\p{L}]+(?:[ '\u2019-][\p{L}]+)*$/u;

  return namePattern.test(name);
}