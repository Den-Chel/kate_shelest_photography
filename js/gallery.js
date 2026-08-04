// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const galleryImages = document.querySelectorAll(".gallery-img");

function openLightbox(image) {
  lightboxImg.src = image.src;
  lightboxImg.alt = image.alt || "Enlarged gallery image";
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxImg.src = "";
  lightboxImg.alt = "";
  document.body.style.overflow = "";
}

// Run only on pages with lightbox
if (lightbox && lightboxImg && lightboxClose) {
  galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
      openLightbox(image);
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);

  // Close when the dark background is clicked
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Close with the Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
}