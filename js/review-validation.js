"use strict";

// Get the review form
const reviewForm = document.getElementById("review-form");

if (reviewForm) {
    reviewForm.addEventListener("submit", function (event) {
        
        event.preventDefault();
        clearReviewErrors();

        const name = document.getElementById("review-name");
        const session = document.getElementById("review-session");
        const rating = document.getElementById("review-rating");
        const message = document.getElementById("review-message");
        const success = document.getElementById("review-success");

        let isValid = true;

        // Check name
        if (name.value.trim() === "") {
            showReviewError(
                name,
                "review-name-error",
                "Please enter your name."
            );
            isValid = false;
        }

        // Check session 
        if (session.value === "") {
            showReviewError(
                session,
                "review-session-error",
                "Please choose a photography session."
            );
            isValid = false;
        }

        // Check rating
        if (rating.value === "") {
            showReviewError(
                rating,
                "review-rating-error",
                "Please choose a rating."
            );
            isValid = false;
        }

        // Check review
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
            success.textContent =
                "Thank you for sharing your experience!";
            reviewForm.reset();
        }
    });
}

// Show an error
function showReviewError(field, errorId, message) {
    field.classList.add("is-invalid");
    document.getElementById(errorId).textContent = message;
}

// Clear old errors
function clearReviewErrors() {
    const fields = reviewForm.querySelectorAll(
        ".form-control, .form-select"
    );
    const errors = reviewForm.querySelectorAll(".error-message");

    fields.forEach(function (field) {
        field.classList.remove("is-invalid");
    });

    errors.forEach(function (error) {
        error.textContent = "";
    });

    document.getElementById("review-success").textContent = "";
}