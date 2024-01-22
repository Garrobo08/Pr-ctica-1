//BOTÓN CARGAR MÁS ELEMENTOS
const NUM_RESULTS = 4;

let loadMoreRequests = 0;

async function loadMore(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/sports?from=${from}&to=${to}`);

    const newSports = await response.text();
  
    const sportsDiv = document.getElementById("sports");

    sportsDiv.innerHTML += newSports;

    loadMoreRequests++;
}
//Cargar los 4 primeros elementos con AJAX
async function datosIniciales(){
    const from = (loadMoreRequests);    //Elementos cargados
    const to = NUM_RESULTS;  //Elementos que se cargan
    const response = await fetch(`/sports?from=${from}&to=${to}`);

    const newSports = await response.text();
  
    const sportsDiv = document.getElementById("sports");

    sportsDiv.innerHTML += newSports;

};
document.addEventListener("DOMContentLoaded",datosIniciales);

/*______________________________________________________________________________*/
//BARRA DE BÚSQUEDA
document.addEventListener('keyup',busqueda);    //Cuando se escriba algo se activa búsqueda
function busqueda(){
    // Obtener el valor ingresado por el usuario
    const valor = document.getElementById('busqueda').value.toLowerCase();   //Obtenemos el valor de la búsqueda en mínusculas
    console.log('Busqueda: ',valor);

    const elementos = document.getElementById("sports");
    console.log(elementos)
    const deporte = elementos.getElementsByClassName("col-xl-3 col-md-4 col-sm-6");
    console.log(deporte);

    for (let i=0; i<deporte.length; i++){
        let nombre = deporte[i].getElementsByTagName('h3')[0].innerText.toLowerCase();    //La primera etiqueta h3 es la etiqueta [0]. Si es por tags es necesario especificar cual
        console.log(nombre);

        if (nombre.includes(valor)){
            deporte[i].style.display = 'block';
        }else{
            deporte[i].style.display = 'none';
        }
    }
}












