/* ============================================================
   EFECTO DE ESCRITURA EN EL BUSCADOR
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-blocked");
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

    setTimeout(typeWriter, 800);
});


/* ============================================================
   SCROLL DESDE LA LUPA → SECCIÓN INTRO (seccion2)
============================================================ */

function scrollToNextSection() {
    const next = document.getElementById("seccion2");
    if (next) {
        next.scrollIntoView({ behavior: "smooth" });
    }
}


/* ============================================================
   MAZO DE TARJETAS — ANIMACIÓN LIMPIA
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const stickers = document.querySelectorAll(".sticker");

    // Rotación inicial aleatoria
    stickers.forEach(sticker => {
        const rot = (Math.random() * 14) - 7;
        sticker.style.setProperty("--rot", `${rot}deg`);
    });

    let currentCenter = 2; // sticker central inicial

    function rearrange() {
        stickers.forEach((sticker, i) => {
            sticker.classList.remove("left", "right", "center");

            if (i === currentCenter) {
                sticker.classList.add("center");
            } else if (i < currentCenter) {
                sticker.classList.add("left");
            } else {
                sticker.classList.add("right");
            }
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
   FADE-IN DE LA SECCIÓN INTRO (amarilla)
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const introSection = document.querySelector(".intro-section");

    const observerIntro = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                introSection.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    if (introSection) observerIntro.observe(introSection);
});


/* ============================================================
   APARICIÓN SUAVE DE LAS VERDURAS AL HACER SCROLL
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const shapes = document.querySelectorAll(".veggie-shape");

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
   SCROLL DESDE EL LOGO DE ZANAHORIA → SECCIÓN NARANJA
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const btnNext = document.getElementById("btn-next-orange");

    if (btnNext) {
        btnNext.addEventListener("click", () => {
            const destino = document.getElementById("seccion-naranja");
            if (destino) {
                destino.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
/* ============================================================
   FONDO DINÁMICO DE ZANAHORIAS — GENERADOR ALEATORIO
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const layer = document.querySelector(".carrot-layer");

    if (!layer) return;

    const NUM = 18; // cantidad de zanahorias en el fondo

    for (let i = 0; i < NUM; i++) {

        const img = document.createElement("img");
        img.src = "assets/images/zanahoria-verde.png";
        img.classList.add("carrot-shape");

        // tamaño aleatorio
        const scale = (Math.random() * 0.6) + 0.6; // 0.6 a 1.2
        img.style.setProperty("--scale", scale);

        // rotación aleatoria
        const rot = (Math.random() * 90 - 45) + "deg";
        img.style.setProperty("--rot", rot);

        // posición aleatoria
        img.style.top = Math.random() * 100 + "%";
        img.style.left = Math.random() * 100 + "%";

        layer.appendChild(img);
    }

    // animación al aparecer en pantalla
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".carrot-shape").forEach(el => {
                    el.classList.add("visible");
                });
            }
        });
    }, { threshold: 0.05 });

    observer.observe(layer);
});

