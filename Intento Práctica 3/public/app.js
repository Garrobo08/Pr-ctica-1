const NUM_RESULTS = 4;

let loadMoreRequests = 0;

async function loadMore(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/more?from=${from}&to=${to}`);

    const newSports = await response.json();
  
    const deporteDiv = document.getElementById("deporte");

    deporteDiv.innerHTML += newSports;

    loadMoreRequests++;
}

/*
// Añade un listener al botón cargar más
const cargarMasButton = document.getElementById('cargarMas');
cargarMasButton.addEventListener('click', loadMore);

// Llama a loadMore al cargar la página para mostrar los primeros deportes
document.addEventListener('DOMContentLoaded', loadMore);
*/

/*
// Asegúrate de tener estas variables globales definidas
let from = 0;
let to = 3;

// Función para cargar más deportes
async function loadMore() {
    // Obtén la posición actual del scroll
    const scrollPosition = window.innerHeight + window.scrollY;

    // Verifica si el usuario ha llegado al final de la página
    if (scrollPosition >= document.body.offsetHeight) {
        // Incrementa los límites de carga
        from += 4;
        to += 4;

        try {
            // Realiza una solicitud AJAX a la ruta correcta
            const response = await fetch(`/sport?from=${from}&to=${to}`);
            const data = await response.json();

            // Agrega los nuevos deportes a la página
            if (data.length > 0) {
                data.forEach(sport => {
                    addSport(sport);
                });
            }
        } catch (error) {
            console.error('Error al cargar más deportes:', error);
        }
    }
}

// Llama a loadMore al cargar la página para mostrar los primeros deportes
document.addEventListener('DOMContentLoaded', loadMore);

// Configura un event listener para el evento de scroll
window.addEventListener('scroll', loadMore);
*/