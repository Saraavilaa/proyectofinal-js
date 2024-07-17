document.addEventListener("DOMContentLoaded", () => {
    // Asegurarnos de que el formulario exista
    const form = document.querySelector('.body-form form');
    const successMessage = document.getElementById('success-message');
    if (!form) {
        console.error('Formulario no encontrado');
        return;
    }

    // Event listener para el formulario de contacto
    form.addEventListener('submit', event => {
        event.preventDefault();
        enviarFormulario();
    });

    // Función para enviar el formulario
    function enviarFormulario() {
        const nombre = document.getElementById('name').value;
        const telefono = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('message').value;

        // Validar los campos del formulario
        if (!nombre || !telefono || !email || !mensaje) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Validar que el campo de teléfono solo contenga números
        if (!/^\d+$/.test(telefono)) {
            alert('Por favor, ingrese un número de teléfono válido.');
            return;
        }

        // Simular el envío de datos (aquí podrías usar fetch para enviar a un servidor)
        console.log('Formulario enviado:', { nombre, telefono, email, mensaje });

        // Mostrar mensaje de éxito
        successMessage.style.display = 'block';

        // Ocultar el mensaje de éxito después de 7 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

        // Limpiar el formulario
        form.reset();
    }
});
