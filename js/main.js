// Parallax en el header
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const intro = document.querySelector(".intro");

  intro.style.backgroundPosition = `right calc(50% + ${scrolled * 0.3}px)`;
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

// Abrir el modal al hacer clic en una imagen
document.querySelectorAll(".card-img-top").forEach((img) => {
  img.addEventListener("click", () => {
    // Si estamos en móvil y existe data-mobile-src, usar esa imagen
    let src = img.src;
    if (window.innerWidth <= 768 && img.dataset.mobileSrc) {
      src = img.dataset.mobileSrc;
    }

    modalImg.src = src;
    modalImg.alt = img.alt;
    modal.style.display = "flex";
  });
});

// Cerrar el modal al hacer clic en la imagen o el fondo
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target === modalImg) {
    modal.style.display = "none";
  }
});
