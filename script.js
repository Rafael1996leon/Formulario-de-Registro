
const formulario = document.getElementById('registroForm');
const mensajeDiv = document.getElementById('mensaje');


formulario.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    const correo = document.getElementById('correo').value.trim();
    const contrasena = document.getElementById('contrasena').value;

    
    mensajeDiv.textContent = '';
    mensajeDiv.classList.add('hidden');


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   
    if (correo === '') {
        mostrarMensaje('El correo electrónico no puede estar vacío.');
        return;
    }
    if (!emailRegex.test(correo)) {
        mostrarMensaje('Por favor, ingresa un correo electrónico con formato válido.');
        return;
    }


    if (contrasena.length < 8) {
        mostrarMensaje('La contraseña debe tener al menos 8 caracteres.');
        return;
    }


    mostrarMensaje('¡Registro exitoso!', 'text-green-500');

});

/**
 * @param {string} texto 
 * @param {string} [clase='text-red-500'] 
 */
function mostrarMensaje(texto, clase = 'text-red-500') {
    mensajeDiv.textContent = texto;
    mensajeDiv.classList.remove('hidden');
    mensajeDiv.className = `text-sm font-medium mb-4 ${clase}`;
}
