//VALIDACIÓN DE FORMULARIO

    //Creamos una constante que apunte al formulario
    const form = document.getElementById('formucolor');
    const nombre = document.getElementById('campo-nombre');
    const descripcion = document.getElementById('descripcion');
    const foto = document.getElementById('foto');
    const errorTextArea = document.getElementById('errorTextArea');
    const errorNombre = document.getElementById('errorNombre');
    const errorUrl = document.getElementById('errorUrl');


    //después de esto ya tenemos los elemtos selccionados que queremos validar

    //Añadimos un evento 
    form.addEventListener('submit', e => {  //después de paréntesis el nombre que se pasa es nuestro botón (NO sé si afecta la mayúscula y la minúscula)
        e.preventDefault();
        checkInpunts(); //método para validar
    });


    //PARA VALIDAR DESCRIPCIÓN EN TIEMPO REAL 
    descripcion.addEventListener('input', () => {
        validarTextArea();
    });

    nombre.addEventListener('input', () => {
        validarMayuscula();
    });

    foto.addEventListener('input', () => {
        validarerrorURL();
    });
    



//Funcion principal para hacer todas la validaciones
function checkInpunts() {
    const nombreValue = nombre.value.trim();
    const descripcionValue = descripcion.value.trim();
    const fotoValue = foto.value.trim();

    // 1. Verificamos que el campo de Nombre no esté vacío y que empiece por mayúscula
    if (nombreValue === '') {
        setErrorFor(nombre, 'No dejar el campo Nombre vacío');
    } else {
        setSuccessFor(nombre);
    }

    if (descripcionValue === ''){
        setErrorFor(descripcion, 'No dejar el campo Descripción vacío');
    }else{
        setSuccessFor(descripcion);
    }

    // 4. Verificamos si es una URL de imagen válida (0.5 puntos)
    if (!esURL(fotoValue)) {
        setErrorFor(foto, "La imagen no tiene una URL válida");
    } else {
        setSuccessFor(foto);
    }
    

}


//FUNCIONES PARA QUE SE VAYAN VALIDANDO A TIEMPO REAL 

//Función para realizar las validaciones de mayúsculas en tiempo real de Nombre
function validarMayuscula (){
    const nombreValue = nombre.value.trim();
if (!/^[A-Z]/.test(nombreValue)) {
    setErrorFor(nombre, 'El nombre debe comenzar con mayúscula');
}else {
    setSuccessFor(nombre);
}
}

 //Función para realiazar las validaciones del textarea(ahora un input)
 function validarTextArea (){
    const descripcionValue = descripcion.value.trim();
if (descripcionValue.length < 50 || descripcionValue.length > 500){
    setErrorFor(descripcion, 'Debe contener entre 50 y 500 caracteres ');
}else{
    setSuccessFor(descripcion);
}
}


// Función para validar la URL en tiempo real
function validarerrorURL() {
    const fotoValue = foto.value.trim();

    // 4. Verificamos si es una URL de imagen válida 
    if (!esURL(fotoValue)) {
        setErrorFor(foto, "La imagen no tiene una URL válida ");
    } else {
        setSuccessFor(foto);
    }
}



   


    //Función para mostrar el error
    function setErrorFor (input, message){
        const formucolor = input.parentElement; //es igual al elemento padre
        const smmall = formucolor.querySelector ('small'); //le decimos que coja las que se llamen small
        formucolor.className = 'formucolor error'; //la clase que hemos utilizado en el CSS
        smmall.innerText = message;
    }
    //Vamos a seleccionar el elemento small de formulario
    
    //También creamos una función por si todo está bien 
    function setSuccessFor(input) {
        const formucolor = input.parentElement;
        formucolor.className = 'formucolor success';
    }
    
    // Función para validar si la cadena es una URL
    function esURL(foto) {
        const regex = new RegExp('^(https?:\\/\\/)?' + // protocolo
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // dominio
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // O dirección IP
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // puerto y ruta
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // parámetros de consulta
        '(\\#[-a-z\\d_]*)?$', 'i') // fragmento
    
        return regex.test(foto);
    }

