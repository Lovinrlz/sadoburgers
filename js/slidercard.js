document.addEventListener("DOMContentLoaded", function () {
  // Inicializar los tres carruseles
  setupCarousel("card1");
  setupCarousel("card2");
  setupCarousel("card3");

  function setupCarousel(cardId) {
    const card = document.getElementById(cardId);
    // Click a la card para su redireccionamiento
    card.addEventListener("click", function (e) {
      if (!e.target.classList.contains("btn")) {
        window.location.href = card.dataset.url;
      }
    });
    const slides = card.querySelectorAll(".image-slide");
    let currentSlide = 0;

    function nextSlide() {
      // Ocultar la imagen actual
      slides[currentSlide].classList.remove("active");

      // Avanzar ala siguiente imagen
      currentSlide = (currentSlide + 1) % slides.length;

      // Mostrar la nueva imagen
      slides[currentSlide].classList.add("active");
    }

    // Cambiar imagen cada 3 segundos
    let slideInterval = setInterval(nextSlide, 3500);
  }
});
