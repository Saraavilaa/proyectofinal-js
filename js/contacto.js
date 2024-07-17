document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.body-form form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    if (!form) {
        console.error('Formulario no encontrado');
        return;
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        enviarFormulario();
    });

    function enviarFormulario() {
        const nombre = document.getElementById('name').value;
        const telefono = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('message').value;

        // Ocultar mensajes anteriores
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        if (!nombre || !telefono || !email || !mensaje) {
            mostrarError('Por favor, complete todos los campos.');
            return;
        }

        if (!/^\d+$/.test(telefono)) {
            mostrarError('Por favor, ingrese un número de teléfono válido.');
            return;
        }

        const formData = { nombre, telefono, email, mensaje };

        fetch('/api/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.successMessage) {
                mostrarExito(data.successMessage);
                form.reset();
            }
        })
        .catch(error => {
            mostrarError('Error al enviar el formulario: ' + error.message);
        });
    }

    function mostrarExito(mensaje) {
        successMessage.textContent = mensaje;
        successMessage.style.display = 'block';

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }

    function mostrarError(mensaje) {
        errorMessage.textContent = mensaje;
        errorMessage.style.display = 'block';

        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
});
