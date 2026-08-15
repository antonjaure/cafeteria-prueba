// 1. Buscamos TODOS los botones que tengan la clase 'btn-pedir'
const botones = document.querySelectorAll('.btn-pedir');

// 2. Le decimos a JavaScript qué hacer cuando alguien haga clic
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        // Encontramos la tarjeta del producto al que pertenece este botón
        const producto = this.parentElement;
        
        // Buscamos el nombre (el h3) dentro de esa tarjeta
        const nombreCafe = producto.querySelector('h3').innerText;
        
        // Mostramos una alerta en la pantalla
        alert('¡Excelente elección! Has añadido un ' + nombreCafe + ' a tu carrito.');
    });
});