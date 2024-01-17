import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser'; //para manejar datos de formulario 
import { __dirname } from './dirname.js'; //Importa desde dirnamen.js la constante __dirname
import router from './router.js';

//Crear una instancia de la aplicacion Express
const app = express();

//Configuración la carpeta de vistas y el motor de la plantilla Mustache
app.set('views', __dirname + '/../views');
app.set('view engine', 'html');
app.engine('html', mustacheExpress(), ".html");

//Configuración del middleware bodyParser para analizar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Configurando Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(__dirname + '/../public'));

// Configurando Express para usar el enrutador definido en router.js
app.use('/', router);

// Iniciando el servidor y escuchando en el puerto 3000
app.listen(3000, () => console.log('Listening on port 3000!'));