/*______________________________________________________________________________*/
//VALIDACIÓN DEL FORMULARIO
const formulario = document.getElementById("formulario");
console.log('Formulario: ',formulario);
formulario.addEventListener('submit', (error)=>{
    validarFormulario();
    if (validarFormulario() && true){
        return true;
    }else{
        error.preventDefault();
    }
});

// addEventListener ('submit', (error)=>{
//     error.preventDefault();    
//     validarFormulario();
// });


function validarFormulario(){
   const nombre = document.getElementById("nombre").value;
//    console.log('Nombre: ',nombre);
   validarNombre(nombre);
   const fecha = document.getElementById("fecha").value;
//    console.log('Fecha: ',fecha);
   validarFecha(fecha);
   const descripcion = document.getElementById("descripcion").value;
//    console.log('Descripcion: ', descripcion);
   validarDescripcion(descripcion);   
   const foto = document.getElementById("foto").value;
//    console.log('URl: ',foto);
   validarFoto(foto);
   const participantes = document.getElementById("Número-de-participantes").value;
//    console.log('Participantes: ', participantes);
   validarParticipantes(participantes);
   const tipo = document.getElementById("cajas"); 
   validarTipo(tipo);

    console.log('validarNombre',validarNombre(nombre));
    console.log('validarFecha',validarFecha(fecha));
    console.log('validarDesc',validarDescripcion(descripcion));
    console.log('validarFoto',validarFoto(foto));
    console.log('validarParticipantes',validarParticipantes(participantes));
    console.log('validarTipo',validarTipo(tipo));


   if(validarNombre(nombre) && validarFecha(fecha) && validarDescripcion(descripcion) && validarFoto(foto) && validarParticipantes(participantes) && validarTipo(tipo) && true){
        return true;    
   }else {
        return false;
   }
}

//Validar Nombre del Deporte
function validarNombre(valor){
    const error = document.getElementById("errorNombre");
    // console.log('Valor: ',valor);
    if(valor === '' || valor == null){
        error.innerText='Introduzca el nombre del deporte'; 
        error.classList.replace("oculto","error");
        return false;   
    }else if (!/^[A-Z]/.test(valor)){
        error.innerText='El nombre debe empezar por mayúscula'; 
        error.classList.replace("oculto","error");
        return false;   
    }else{
        error.classList.replace("error","oculto");
        return true;
    }   
}

//Validar Fecha
function validarFecha(valor){
    const error = document.getElementById("errorFecha");
    // console.log('Valor: ',valor);
    if(valor === '' ||valor == null){
        error.innerText='Introduzca una fecha de origen'; 
        error.classList.replace("oculto","error");
        return false;      
    //¿Cómo hago para que reconozca si una fecha es válida?
    //}else if(valor >= date){
    //     error.innerText='Introduzca una fecha correcta'; 
    //     error.classList.replace("oculto","error");  
    }else{
        error.classList.replace("error","oculto");
        return true;
    }   
}

//Validar Descripcion
function validarDescripcion(valor){
    const error = document.getElementById("errorDescripcion");
    let letras = 0;
    for(let i=0; i< valor.length; i++){
        let posicion = valor.charAt(i);
        if (posicion !== ' '){
            letras += 1;
        }
    };
    // console.log('Desc: ',valor);
    // console.log('Letras: ',letras);
    if(valor === '' ||valor == null){
        error.innerText='Introduzca una descripción del deporte'; 
        error.classList.replace("oculto","error");
        return false;      
    }else if (!/^[A-Z]/.test(valor)){
        error.innerText='El texto debe empezar por mayúscula'; 
        error.classList.replace("oculto","error");
        return false;   
    }else if(letras < 50){  
        error.innerText='La descripción debe contener al menos 50 carácteres.'; 
        error.classList.replace("oculto","error");
        return false;    
    }else if(letras > 2000){
        error.innerText='La descripción debe ser de menos de 2000 caracteres.'; 
        error.classList.replace("oculto","error");
        return false;    
    }else{
        error.classList.replace("error","oculto");
        return true;
    }   
}

//Validar la URl
function validarFoto(valor) {
    const error = document.getElementById("errorFoto");
    // console.log('Valor: ',valor);
    
    if(valor === '' || valor == null){
        error.innerText='Introduzca la URl de la imagen'; 
        error.classList.replace("oculto","error");
        return false;     
    }else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valor)){
        error.innerText='La URl no es válida'; 
        error.classList.replace("oculto","error");
        return false;     
    }else{
        error.classList.replace("error","oculto");
        return true;
    }   
}

//Validar Participantes
function validarParticipantes(valor) {
    const error = document.getElementById("errorParticipantes");
    // console.log('Valor: ',valor);
    
    if(valor == 'Elige...'){
        error.innerText='Seleccione una categoría'; 
        error.classList.replace("oculto","error");
        return false;     
    }else{
        error.classList.replace("error","oculto");
        return true;
    }   
}

// Validar modalidad
function validarTipo(valor) {
    const error = document.getElementById("errorTipo");
    let box = valor.getElementsByClassName("form-check-input");
    console.log(box);
    let contador = 0;
    
    for (let i=0; i<box.length; i++){
        console.log(i);
        let cb = box[i].checked;
        if (cb && true){
            contador = contador+1;
        }
    }
    console.log(contador);
    if(contador == 0){
        error.innerText='Seleccione al menos una modalidad'; 
        error.classList.replace("oculto","error");   
    }else{
        error.classList.replace("error","oculto");
        return true;
}}
