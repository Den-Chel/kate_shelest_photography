// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const galleryImages = document.querySelectorAll(".gallery-img");

// Function to open the selected image
galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    lightbox.classList.add("open"); 
    lightboxImg.src = this.src; 
    lightboxImg.alt = this.alt;
  });
});

// Function to close the lightbox
function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxImg.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);

// Close by clicking the background
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// Close with the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
