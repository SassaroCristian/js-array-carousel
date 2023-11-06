document.addEventListener("DOMContentLoaded", function () {
  // Attendi che il documento HTML sia stato completamente caricato prima di eseguire il codice.

  // Seleziona tutte le diapositive del carousel con l'ID "carousel-slide".
  const slides = document.querySelectorAll("#carousel-slide");

  // Seleziona il pulsante precedente del carousel con la classe "carousel-button.prev".
  const prevButton = document.querySelector(".carousel-button.prev");

  // Seleziona il pulsante successivo del carousel con la classe "carousel-button.next".
  const nextButton = document.querySelector(".carousel-button.next");

  // Inizializza l'indice corrente a 0 (indicando la prima diapositiva).
  let currentIndex = 0;

  // Questa funzione gestisce il passaggio tra le diapositive del carousel.
  function goToSlide(index) {
    // Rimuovi la classe "active" dalla diapositiva corrente.
    slides[currentIndex].classList.remove("active");

    // Imposta l'indice corrente al nuovo valore.
    currentIndex = index;

    // Aggiungi la classe "active" alla nuova diapositiva corrente.
    slides[currentIndex].classList.add("active");
  }

  // Aggiungi un event listener al pulsante "prev" del carousel.
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      // Se l'indice corrente è maggiore di 0, vai alla diapositiva precedente.
      goToSlide(currentIndex - 1);
    } else {
      // Altrimenti, se si è sulla prima diapositiva, vai all'ultima diapositiva (indice 4 nel tuo esempio).
      goToSlide(4);
    }
  });

  // Aggiungi un event listener al pulsante "next" del carousel.
  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      // Se l'indice corrente è inferiore all'ultimo indice delle diapositive, vai alla diapositiva successiva.
      goToSlide(currentIndex + 1);
    } else {
      // Altrimenti, se si è sull'ultima diapositiva, torna alla prima diapositiva (indice 0).
      goToSlide(0);
    }
  });

  // Inizializza il carousel mostrando la prima diapositiva.
  goToSlide(currentIndex);
});
