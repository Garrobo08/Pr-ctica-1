const form = document.getElementById('formucolor');
const deporte = document.getElementById('campo-nombre');
const fecha = document.getElementById('campo-fecha');
const descripccion = document.getElementById('descripcion');
const foto = document.getElementById('foto');
const participantes = document.getElementById('Número-de-participantes');
const tipo = document.getElementById('tipo');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const deporteValue = deporte.value.trim();
	const fechaValue = fecha.value.trim();
	const descripccionValue = descripccion.value.trim();
	const fotoValue = foto.value.trim();
    const participantesValue = participantes.value.trim();
    const tipoValue = tipo.value.trim();


	
	if(deporteValue === '') {
		setErrorFor(deporte, 'No puede dejar este campo en blanco');
	} else {
		setSuccessFor(deporte);
	}
	
	if(fechaValue === '') {
		setErrorFor(fecha, 'Tiene que seleccionar una fecha');
	} else {
		setSuccessFor(fecha);
	}
	
	if(descripccionValue === '') {
		setErrorFor(descripccion, 'No puede dejar este campo en blanco');
	} else {
		setSuccessFor(descripccion);
	}
	
	if(fotoValue === '') {
		setErrorFor(foto, 'Foto no debe ngresar en blanco');
	} else {
		setSuccessFor(foto);
	}

    if(participantesValue === '') {
		setErrorFor(participantes, 'Tiene que seleccionar algún participante');
	} else {
		setSuccessFor(participantes);
	}

    if(tipoValue === '') {
		setErrorFor(tipo, 'No puede dejar este campo en blanco');
	} else {
		setSuccessFor(tipo);
	}
}

//nos muestra el error
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'formucolor error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'formucolor success';
}

