const formulario = document.getElementById('formucolor');
const inputs = document.querySelectorAll('#formucolor input'); //almacenamos todos los inputs de nuestro formulario


//objetos (expresiones) que tiene dentro varias propiedades.
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    descripción: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    img: /https:\/\/[a-zA-Z\.\/-] + //paraurl
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'usuario');
		break;
		case "fecha":
			validarCampo(expresiones.fecha, e.target, 'nombre');
		break;
		case "descripcion":
			validarCampo(expresiones.descripcion, e.target, 'password');
		break;
		case "imagen":
			validarCampo(expresiones.img, e.target, 'correo');
		break;
		case "tipo":
			validarCampo(expresiones.tipo, e.target, 'telefono');
		break;
        case "check":
			validarCampo(expresiones.check, e.target, 'telefono');
		break;
	}
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); //sirve para que cuando levante la mano de la tecla se ejecute código y lo valide
	input.addEventListener('blur', validarFormulario);
});

//para que salga el mensaje de error
//CAMBIAR A QUE SE MUEVA A UNA PAGINA DE ERROR
formulario.addEventListener('submit', (e) => {
	e.preventDefault(); //sirve para que al recargar con los campos vacios no cambie la url //VER SI QUEREMOS CAMBIAR
});