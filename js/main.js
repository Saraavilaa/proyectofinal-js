document.addEventListener("DOMContentLoaded", () => {
    // Variables para seleccionar elementos del DOM
    const numDadosSelect = document.querySelector('select[name="Num-dados"]');
    const numCarasSelect = document.querySelector('select[name="Num-caras"]');
    const tirarDadoBtn = document.querySelector('.tirar-dado');
    const imagenDadoContainer = document.querySelector('.imagen-dado');
    const resultadoDiv = document.createElement('div');
    imagenDadoContainer.appendChild(resultadoDiv);
  
    // Inicializar opciones de cantidad de dados y caras
    initOptions();

    // Event listener para el botón de tirar dados
    tirarDadoBtn.addEventListener('click', tirarDados);

    // Event listener para actualizar la cantidad de dados
    numDadosSelect.addEventListener('change', actualizarImagenesDados);

    // Función para inicializar las opciones de los select
    function initOptions() {
        // Opciones para la cantidad de dados
        for (let i = 1; i <= 5; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            numDadosSelect.appendChild(option);
        }

        // Opciones para la cantidad de caras de los dados
        [4, 6, 8, 10, 12, 20].forEach(caras => {
            const option = document.createElement('option');
            option.value = caras;
            option.textContent = caras;
            numCarasSelect.appendChild(option);
        });
    }

    // Función para actualizar las imágenes de los dados según la cantidad seleccionada
    function actualizarImagenesDados() {
        const numDados = parseInt(numDadosSelect.value);
        imagenDadoContainer.innerHTML = ''; // Limpiar imágenes anteriores
        for (let i = 0; i < numDados; i++) {
            const img = document.createElement('img');
            img.classList.add('tamanio-dado');
            img.src = '/imagenes/dado1.png'; // Imagen inicial
            img.alt = `Dado ${i + 1}`;
            imagenDadoContainer.appendChild(img);
        }
        imagenDadoContainer.appendChild(resultadoDiv); // Reagregar el div de resultados
    }

    // Función para tirar los dados y mostrar el resultado
    function tirarDados() {
        const numDados = parseInt(numDadosSelect.value);
        const numCaras = parseInt(numCarasSelect.value);
        const resultados = [];

        for (let i = 0; i < numDados; i++) {
            resultados.push(Math.floor(Math.random() * numCaras) + 1);
        }

        mostrarResultados(resultados);
        cambiarImagenesDados(resultados, numCaras);
    }

    // Función para mostrar los resultados en el DOM
    function mostrarResultados(resultados) {
        resultadoDiv.innerHTML = `<p class="resultados">Resultados: ${resultados.join(', ')}</p>`;
    }

    // Función para cambiar las imágenes de los dados según los resultados
    function cambiarImagenesDados(resultados, numCaras) {
        const dados = document.querySelectorAll('.tamanio-dado');
        resultados.forEach((numero, index) => {
            if (numero >= 1 && numero <= numCaras) {
                dados[index].src = `/imagenes/dado${numero}.png`;
            } else {
                // Manejar casos donde el número está fuera del rango de imágenes disponibles
                console.log('Número de dado fuera del rango de imágenes disponibles');
            }
        });
    }
  
    // Ejemplo de uso de AJAX para cargar datos desde un JSON local
    fetch('/data/dados.json')
        .then(response => response.json())
        .then(data => {
            console.log('Datos de ejemplo cargados:', data);
        })
        .catch(error => console.error('Error al cargar datos:', error));
  
    // Ejemplo de una librería de animación (usando GSAP)
    gsap.from(".tamanio-dado", { duration: 2, x: 300, opacity: 0, scale: 0.5 });
});


// CONTACTOS PAGE 
