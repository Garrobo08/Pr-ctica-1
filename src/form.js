const formulario = document.getElementById('formucolor');
const inputs = document.querySelectorAll('#formucolor input'); //almacenamos todos los inputs de nuestro formulario


//objetos (expresiones) que tiene dentro varias propiedades.
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    descripción: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    img: /https:\/\/[a-zA-Z\.\/-] + //paraurl
}

