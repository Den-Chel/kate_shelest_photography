// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

const galleryImages = Array.from(document.querySelectorAll(".gallery-img"));

let currentImageIndex = 0;

// Show selected image
function showImage(index) {
  currentImageIndex = index;

  const image = galleryImages[currentImageIndex];

  lightboxImg.src = image.src;
  lightboxImg.alt = image.alt || "Enlarged gallery image";
}

// Open lightbox
function openLightbox(index) {
  showImage(index);

  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

// Close lightbox
function closeLightbox() {
  lightbox.classList.remove("open");

  lightboxImg.src = "";
  lightboxImg.alt = "";

  document.body.style.overflow = "";
}

// Show next image
function showNextImage() {
  currentImageIndex++;

  if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  }

  showImage(currentImageIndex);
}

// Show previous image
function showPreviousImage() {
  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  }

  showImage(currentImageIndex);
}

// Run only on pages with lightbox
if (lightbox && lightboxImg && lightboxClose && lightboxPrev && lightboxNext) {
  // Open clicked image
  galleryImages.forEach(function (image, index) {
    image.addEventListener("click", function () {
      openLightbox(index);
    });
  });

  // Close button
  lightboxClose.addEventListener("click", closeLightbox);

  // Previous button
  lightboxPrev.addEventListener("click", function (event) {
    event.stopPropagation();
    showPreviousImage();
  });

  // Next button
  lightboxNext.addEventListener("click", function (event) {
    event.stopPropagation();
    showNextImage();
  });

  // Close when dark background is clicked
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard controls
  document.addEventListener("keydown", function (event) {
    if (!lightbox.classList.contains("open")) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      showNextImage();
    }

    if (event.key === "ArrowLeft") {
      showPreviousImage();
    }
  });
}
