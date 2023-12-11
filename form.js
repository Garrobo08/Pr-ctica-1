//Estos son los elementos seleccionados
const form = document.getElementById('formucolor');
const deporte = document.getElementById('campo-nombre');
const fecha = document.getElementById('campo-fecha');
const descripcion = document.getElementById('descripcion');
const foto = document.getElementById('foto');
const participantes = document.getElementById('Número-de-participantes');
const tipo = document.getElementById('tipo');

//agragamos un evento
form.addEventListener('guardar' , e  => {
    e.preventDefault();
    checkInputs();
});

//metodo que valide los inputs
function checkInputs(){
    const deporteValue = deporte.nodeValue.trim(); //trim para eliminar cualquier valor que este vacío al principio y al final
    const fechaValue = fecha.nodeValue.trim(); 
    const descripcionValue = descripcion.nodeValue.trim(); 
    const fotoValue = foto.nodeValue.trim(); 
    const participantesValue = participantes.nodeValue.trim(); 
    const tipoValue = tipo.nodeValue.trim(); 

    if (deporteValue === ''){
        setErrorFor(deporte,'No puede dejar este campo en blanco');
    }else{
        setSuccessFor(deporte);
    }

    if (fechaValue === ''){
        setErrorFor(fecha,'No puede dejar este campo sin selccionar');
    }else{
        setSuccessFor(fecha);
    }

    if (descripcionValue === ''){
        setErrorFor(descripcion,'No puede dejar este campo en blanco');
    }else{
        setSuccessFor(descripcion);
    }

    if (fotoValue === ''){
        setErrorFor(foto,'No puede dejar este campo en blanco');
    }else{
        setSuccessFor(foto);
    }

    if (participantesValue === ''){
        setErrorFor(participantes,'No puede dejar este campo sin selccionar');
    }else{
        setSuccessFor(participantes);
    }

    if (tipoValue === ''){
        setErrorFor(tipo,'No puede dejar este campo sin seleccionar');
    }else{
        setSuccessFor(tipo);
    }

}

//nos muestra el error
function setErrorFor(input, message){
    const formControl = input.parentElement; //elemento que esta recibiendo como parametro
    const small = formControl.querySelecto ('small');
    formControl.className = '.formucolor error';
    small.innerText = message;

}

function setSuccessFor (input){
    const formControl = input.parentElement;
    formControl.className = 'formucolor success';
}