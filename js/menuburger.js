// Funcion para abrir y cerrar menu hamburguesa (NO TOCAR)
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const overlay = document.querySelector("#overlay");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  overlay.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  overlay.classList.remove("visible");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("visible");
  overlay.classList.remove("visible");
});
// Fin de funcion.
