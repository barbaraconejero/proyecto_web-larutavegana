/* ============================================================
   EFECTO DE ESCRITURA EN EL BUSCADOR
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-blocked");
    const textToType = "Encuentra tu nuevo restaurante vegano favorito...";
    let index = 0;

    function typeWriter() {
        if (index < textToType.length) {
            searchInput.placeholder += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, 70);
        }
    }

    searchInput.placeholder = "";
    setTimeout(typeWriter, 800);
});

/* ============================================================
   SCROLL DESDE LA LUPA → SECCIÓN INTRO (seccion2)
============================================================ */
function scrollToNextSection() {
    const next = document.getElementById("seccion2");
    if (next) next.scrollIntoView({ behavior: "smooth" });
}

/* ============================================================
   MAZO DE TARJETAS (animación)
============================================================ */
document.addEventListener("DOMContentLoaded", () => {

    const stickers = document.querySelectorAll(".sticker");

    // Rotación inicial aleatoria
    stickers.forEach(sticker => {
        const rot = (Math.random() * 14) - 7;
        sticker.style.setProperty("--rot", `${rot}deg`);
    });

    let currentCenter = 2; // sticker inicial al centro

    function rearrange() {
        stickers.forEach((sticker, i) => {
            sticker.classList.remove("left", "right", "center");

            if (i === currentCenter) sticker.classList.add("center");
            else if (i < currentCenter) sticker.classList.add("left");
            else sticker.classList.add("right");
        });
    }

    stickers.forEach((sticker, index) => {
        sticker.addEventListener("click", () => {
            currentCenter = index;
            rearrange();
        });
    });

    rearrange();
});

/* ============================================================
   FADE-IN DE LA SECCIÓN INTRO
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const introSection = document.querySelector(".intro-section");

    if (!introSection) return;

    const observerIntro = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) introSection.classList.add("visible");
        });
    }, { threshold: 0.3 });

    observerIntro.observe(introSection);
});

/* ============================================================
   APARICIÓN SUAVE DE LAS FIGURAS VERDES (si existieran)
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const shapes = document.querySelectorAll(".veggie-shape");

    if (!shapes.length) return;

    const observerShapes = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rot = (Math.random() * 10) - 5;
                entry.target.style.setProperty("--rot", `${rot}deg`);
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    shapes.forEach(el => observerShapes.observe(el));
});

/* ============================================================
   SCROLL DESDE EL BOTÓN ZANAHORIA → SECCIÓN NARANJA
============================================================ */
document.addEventListener("DOMContentLoaded", () => {

    const btnNext = document.getElementById("btn-next-naranja");

    if (!btnNext) return;

    btnNext.addEventListener("click", () => {
        const destino = document.getElementById("seccion-naranja");
        if (destino) destino.scrollIntoView({ behavior: "smooth" });
    });
});


