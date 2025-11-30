const input = document.getElementById("search-input");
const text = "Comienza tu búsqueda";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        input.setAttribute("placeholder", input.placeholder + text.charAt(i));
        i++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;
