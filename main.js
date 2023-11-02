document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll("#carousel-slide");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    let currentIndex = 0;
  
    function goToSlide(index) {
      slides[currentIndex].classList.remove("active");
      currentIndex = index;
      slides[currentIndex].classList.add("active");
    }
  
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {z
        goToSlide(currentIndex - 1);
      } else {
        goToSlide(4); 
      } 
    });
  
    nextButton.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(0); 
      }
    });
  
    goToSlide(currentIndex); 
  });
  