document.addEventListener("DOMContentLoaded", function () {
  // Capture all anchor clicks
  const anchors = document.querySelectorAll("a");
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("Clicked: ", event.target);
    });
  });

  // Image modal functionality
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const images = document.querySelectorAll(".image-container img");
  const closeModal = document.querySelector(".close");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImage.src = this.src;
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
