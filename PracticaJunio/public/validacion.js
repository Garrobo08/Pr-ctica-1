//VALIDACIÓN DE FORMULARIO

// Función para validar si la cadena es una URL
function esURL(foto) {
        const regex = new RegExp('^(https?:\\/\\/)?' + // protocolo
        '((([a-z\\d]([a-z\\d-][a-z\\d]))\\.)+[a-z]{2,}|' + // dominio
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // O dirección IP
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+])' + // puerto y ruta
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // parámetros de consulta
        '(\\#[-a-z\\d_]*)?$', 'i') // fragmento
    
        return regex.test(foto);
}
function checkInputs(nombre,desc,foto){
    //Validación del nombre
    if (nombre === ''){
        setErrorFor(nombre, 'No dejar este campo vacío');
    } else if (!/^[A-Z]/.test(nombre)){
        setErrorFor(nombre, 'El nombre debe comenzar con mayúscula');
    }else {
        setSuccessFor(nombre);
    }
    //Validación descripción
    if (descripcion === ''){
        setErrorFor(descripcion, 'No dejar el campo Descripción vacío');
    }else if (descripcion.length < 50 || descripcion.length > 500){
        setErrorFor(descripcion, 'Debe contener entre 50 y 500 caracteres ');
    }else{
        setSuccessFor(descripcion);
    }
    //Validación de la imagen (URL)
    if (!esURL(foto)) {
        setErrorFor(foto, "La imagen no tiene una URL válida");
    } else {
        setSuccessFor(foto);
    }
    
    if (nombre != '' && isNombre(nombre) && descripcion != '' && descripcion != '' && descripcion.length > 50  && foto != '' && esURL(foto) ) {
        form.submit();
    }
}

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

//Creamos una constante que apunte al formulario
function validar(){
    const form = document.getElementById('formucolor').value;
    const nombre = document.getElementById('campo-nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const foto = document.getElementById('foto').value;
    const errorTextArea = document.getElementById('errorTextArea').value;
    const errorNombre = document.getElementById('errorNombre').value;
    const errorUrl = document.getElementById('errorUrl').value;
    //Ahora que tenemos los valores del formulario tenemos que validarlos
    checkInpunts(nombre,descripcion,foto);
    
 




/*

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

*/

   


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

    


    function isNombre(nombre){
        return /^[A-Z]/.test(nombre);
    }
}
    