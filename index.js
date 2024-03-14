function openModal(imageSrc) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-image");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// JavaScript function to close the modal
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// JavaScript function to capture all anchor clicks
document
  .querySelectorAll(".cards .card a, .read-more, .column.first a")
  .forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default action (e.g., navigating to a link)
      if (this.hasAttribute("data-src")) {
        var imageSrc = this.getAttribute("data-src");
        openModal(imageSrc);
      }
    });
  });
