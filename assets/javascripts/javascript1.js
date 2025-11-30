function scrollToNextSection() {
    const next = document.getElementById("seccion2");
    next.scrollIntoView({ behavior: "smooth" });
}
// efecto rebote al sacar el mouse de cada sticker

document.querySelectorAll('.sticker').forEach(sticker => {

    // Al salir el mouse del sticker
    sticker.addEventListener('mouseleave', () => {

        // agregamos la clase temporal de rebote
        sticker.classList.add('bouncing');

        // quitamos la clase después de la animación
        setTimeout(() => {
            sticker.classList.remove('bouncing');
        }, 450); // duración exacta del bounceExit
    });

});



