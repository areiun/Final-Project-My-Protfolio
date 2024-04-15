// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openPopupBtn = document.getElementById("open-popup-btn");
    const closePopupBtn = document.getElementById("close-popup-btn");
    const popupContainer = document.getElementById("popup-container");
  
    openPopupBtn.addEventListener("click", function() {
      popupContainer.style.display = "block";
    });
  
    closePopupBtn.addEventListener("click", function() {
      popupContainer.style.display = "none";
    });
  });
  
  