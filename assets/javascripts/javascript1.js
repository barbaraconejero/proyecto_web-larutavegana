/* ==========================================
   EFECTO DE ESCRITURA EN EL BUSCADOR
========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    const searchInput = document.getElementById('search-blocked');
    const textToType = "Encuentra tu nuevo restaurante vegano favorito...";
    let index = 0;

    searchInput.placeholder = "";

    function typeWriter() {
        if (index < textToType.length) {
            searchInput.placeholder += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, 70);
        }
    }

    setTimeout(typeWriter, 1000);
});


/* ==========================================
   SCROLL A LA SIGUIENTE SECCIÓN
========================================== */

function scrollToNextSection() {
    const next = document.getElementById("seccion2");
    if (next) {
        next.scrollIntoView({ behavior: "smooth" });
    }
}


/* ==========================================
   MAZO DE TARJETAS — ANIMACIÓN LIMPIA
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const stickers = document.querySelectorAll(".sticker");

    // Inclinación inicial aleatoria (solo UNA VEZ)
    stickers.forEach(sticker => {
        const rot = (Math.random() * 14) - 7; // entre -7 y +7
        sticker.style.setProperty("--rot", `${rot}deg`);
    });

    let currentCenter = 2; // tarjeta que inicia al centro

    // Función que organiza el mazo
    function rearrange() {
        stickers.forEach((sticker, i) => {
            sticker.classList.remove("left", "right", "center");

            if (i === currentCenter) {
                sticker.classList.add("center");
            } 
            else if (i < currentCenter) {
                sticker.classList.add("left");
            } 
            else {
                sticker.classList.add("right");
            }
        });
    }

    // Click: mover tarjeta seleccionada al centro
    stickers.forEach((sticker, index) => {
        sticker.addEventListener("click", () => {
            currentCenter = index;
            rearrange();
        });
    });

    rearrange(); // Render inicial
});

/* ==========================================
   FADE-IN AL HACER SCROLL (INTRO SECTION)
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.querySelector(".intro-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                intro.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(intro);
});

