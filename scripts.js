document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    const submitButton = document.querySelector("button[type='submit']");
    let selectedRating = 0;
  
    stars.forEach(star => {
      star.addEventListener("click", function() {
        selectedRating = this.getAttribute("data-rating");
        stars.forEach(s => s.classList.remove("selected"));
        this.classList.add("selected");
      });
    });
  
    submitButton.addEventListener("click", function() {
      if (selectedRating > 0) {
        document.querySelector(".ratingcontainer").style.display = "none";
        document.querySelector("#selected-rating").textContent = selectedRating;
        document.querySelector(".thankscontainer").style.display = "block";
      } else {
        alert("Please select a rating before submitting.");
      }
    });
  });