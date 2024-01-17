//VALIDACIÓN DE FORMULARIO
    //Creamos una constante que apunte al formulario
    const form = document.getElementById('form');
    const nombre = document.getElementById('campo-nombre');
    const fecha = document.getElementById('fecha');
    const descripcion = document.getElementById('descripcion');
    const foto = document.getElementById('foto');
    const participantes = document.getElementById('Número-de-participantes');
    const tipo = document.getElementById('tipo');
    //después de esto ya tenemos los elemtos selccionados que queremos validar
    
    //Añadimos un evento 
    form.addEventListener('submit', e => {  //después de paréntesis el nombre que se pasa es nuestro botón (NO sé si afecta la mayúscula y la minúscula)
        e.preventDefault();
        checkInpunts(); //método para validar
    });
    
    function checkInpunts () {
        const nombreValue = nombre.value.trim(); //trim lo utilizamos para eliminar caracteres vacíos que hayan podido quedar ahí
        const fechaValue = fecha.nodeValue.trim();
        const descripcionValue = descripcion.nodeValue.trim();
        const fotoValue = foto.nodeValue.trim();
        const participantesValue = participantes.nodeValue.trim();
        const tipoValue = tipo.nodeValue.trim();
    
        //ahora vamos a ir validando
        if(nombreValue === ''){
            setErrorFor (nombre, 'No puede dejar el nombre en blanco');
        }else {
            setSuccessFor(nombre);
        }
    
    }
    
    //Función para mostrar el error
    function setErrorFor (inpunt, message){
        const formucolor = inpunt.parentElement; //es igual al elemento padre
        const smmall = formucolor.querySelector ('small'); //le decimos que coja las que se llamen small
        formucolor.className = 'formucolor error'; //la clase que hemos utilizado en el CSS
        smmall.innerText = message;
    }
    //Vamos a seleccionar el elemento small de formulario
    
    //También creamos una función por si todo está bien 
    function setSuccessFor(input) {
        const formucolor = input.parentElement;
        formControl.className = 'formucolor success';
    }
    
    // Función para validar si la cadena es una URL
    function esURL(foto) {
        return ('^(https?:\\/\\/)?' + // protocolo
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // dominio
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // O dirección IP
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // puerto y ruta
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // parámetros de consulta
            '(\\#[-a-z\\d_]*)?$', 'i') // fragmento
        .test(foto);
    }

    