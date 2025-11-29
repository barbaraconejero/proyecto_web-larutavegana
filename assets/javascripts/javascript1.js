const text = "Comienza tu búsqueda..."; 

let index = 0; 

 

function typeEffect() { 

const element = document.getElementById("search-text"); 

element.textContent = text.slice(0, index); 

index++; 

 

if (index <= text.length) { 

setTimeout(typeEffect, 100); 

} 

} 

 

window.onload = typeEffect; 