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
    selection();
    loadMoreRequests++;
    renderFavorites();
}
//Cargar los 4 primeros elementos con AJAX
async function datosIniciales(){
    const from = (loadMoreRequests);    //Elementos cargados
    const to = NUM_RESULTS;  //Elementos que se cargan
    const response = await fetch(`/sports?from=${from}&to=${to}`);

    const newSports = await response.text();
  
    const sportsDiv = document.getElementById("sports");

    sportsDiv.innerHTML += newSports;
    renderFavorites();
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
/*______________________________________________________________________________*/
//FILTROS
async function selection(){
    const seleccionada = document.getElementById("dropbox").value;
    console.log(seleccionada);

    const elementos = document.getElementById("sports");
    console.log(elementos);

    const deporte = elementos.getElementsByClassName("col-xl-3 col-md-4 col-sm-6");
    console.log(deporte);
    
    if (seleccionada !=='Todas las Categorías'){
        for (let i=0; i<deporte.length; i++){
            let datos = deporte[i].getElementsByTagName('span')[0].innerText;    //La primera etiqueta h3 es la etiqueta [0]. Si es por tags es necesario especificar cual
            console.log(datos);
        
            if(datos.includes(seleccionada)){
                deporte[i].style.display = 'block';
            }else if (seleccionada !==datos){
                deporte[i].style.display = 'none';
            }
        }
    }else{
        for (let i=0; i<deporte.length; i++){
            deporte[i].style.display = 'block';
    }
}
}
/*______________________________________________________________________________*/
//FAVORITOS
//Guardar Favoritos
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//Búsqueda por Favoritos (Botón del menú)
function renderFavorites(){
    let boton = document.querySelectorAll(".btn-favorito"); //Todos los botones de estrella
    console.log(boton);
    let saved=localStorage.getItem('star');
    console.log(saved,saved.length);
    for (let i=0; i<boton.length; i++){  //Recorremos el array de los botones
        let id = boton[i].getAttribute("dep-id").toString();
        if (saved.includes(id)){
            boton[i].innerHTML = `&#9733;`;
            boton[i].classList.replace("btn-favorito","esFavorito");
            favorites.push(id);
        }
    }
};

async function loadFavoritos(){
    const elementos = document.getElementById("sports");
    console.log(elementos)
    const deporte = elementos.getElementsByClassName("col-xl-3 col-md-4 col-sm-6");
    console.log(deporte);
    for (let i=0; i<deporte.length; i++){
        let star = deporte[i].getElementsByTagName('button')[0];    //La primera etiqueta h3 es la etiqueta [0]. Si es por tags es necesario especificar cual
        console.log(star);
        if (star.className == "esFavorito"){
            deporte[i].style.display = 'block';
        }else{
            deporte[i].style.display = 'none';
        }
    }
}
//Estrellita
function favorite(effect){
    let id=effect.getAttribute("dep-id");

    if (effect.className == "btn-favorito"){
        effect.classList.replace("btn-favorito","esFavorito");
        effect.innerHTML = `&#9733;`;
        favorites.push(id);
    

    }else if(effect.className == "esFavorito"){
        effect.classList.replace("esFavorito","noFavorito");
        effect.innerHTML = `&#9734;`;
        favorites = favorites.filter(favoriteId => favoriteId !== id);


    }else if(effect.className == "noFavorito"){
        effect.classList.replace("noFavorito","esFavorito");
        effect.innerHTML = `&#9733;`;
        if (!favorites.includes(id)) {
            favorites.push(id);
        }

    }
    localStorage.setItem('star',JSON.stringify(favorites));
}

/*______________________________________________________________________________*/
//ANIMACIÓN TÍTULO
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typewriter");
    const words = ["Pasión", "Sacrificio", "Ganar", "Perder", "Soñar", "Esfuerzo","Disciplina","No Rendirse"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        // Typing
        const currentChar = currentWord.charAt(charIndex);
        textElement.textContent += currentChar;
        charIndex++;

        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(typeEffect, 2000);
        } else {
          setTimeout(typeEffect, 100);
        }
      } else {
        // Deleting
        const currentText = textElement.textContent;
        const newText = currentText.slice(0, -1);
        textElement.textContent = newText;

        if (newText === "") {
          isDeleting = false;
          wordIndex++;
          charIndex=0;

          // Move to the next word after a delay
          setTimeout(typeEffect, 1000);
        } else {
          setTimeout(typeEffect, 50);
        }

        //Reinicio
        if (wordIndex>7){
            wordIndex=0;
        }
      }
    };

    // Initial call to start the typing effect
    typeEffect();
  });

//ANIMACIÓN IMÁGENES
