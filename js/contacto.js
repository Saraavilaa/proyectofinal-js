document.addEventListener("DOMContentLoaded", () => {
    // Asegurarnos de que el formulario exista
    const form = document.querySelector('.body-form form');
    const successMessage = document.getElementById('success-message');
    
    if (!form) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Formulario no encontrado",
          });
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
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Completa todos los campos del formulario",
                showConfirmButton: false,
                timer: 3500
              });
            return;
        }

        // Validar que el campo de teléfono solo contenga números
        if (!/^\d+$/.test(telefono)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Coloca un numero valido",
              });
            return;
        }

        // Mostrar mensaje de éxito
        successMessage.style.display = 'block';

        // Ocultar el mensaje de éxito después de 3 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

        // Limpiar el formulario
        form.reset();
    }
});
