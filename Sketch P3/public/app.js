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
//BARRA DE BÚSQUEDA
document.addEventListener('navegador',e=>{
    console.log(e.target.value);
});   


