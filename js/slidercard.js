// Funcion imagenes en carrusel
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar los tres carruseles
  setupCarousel("card1");
  setupCarousel("card2");
  setupCarousel("card3");

  function setupCarousel(cardId) {
    const card = document.getElementById(cardId);
    const slides = card.querySelectorAll(".image-slide");
    let currentSlide = 0;

    function nextSlide() {
      const activeSlide = card.querySelector(".image-slide.active");
      const nextSlide = slides[(currentSlide + 1) % slides.length];

      activeSlide.classList.remove("active");
      activeSlide.classList.add("prev");

      nextSlide.classList.add("active");
      nextSlide.classList.remove("next");

      setTimeout(() => {
        activeSlide.classList.remove("prev");
        activeSlide.classList.add("next");
      }, 1000);

      currentSlide = (currentSlide + 1) % slides.length;
    }
    // Cambiar imagen cada 3 segundos
    let slideInterval = setInterval(nextSlide, 2500);

    // Click a la card para su redireccionamiento
    card.addEventListener("click", function (e) {
      if (!e.target.classList.contains("btn")) {
        window.location.href = card.dataset.url;
      }
    });
  }
});
