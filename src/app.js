import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from './dirname.js';
import boardRouter from './rutas.js';
//Importamos los modulos que vamos a utilizar en app.js

const app = express();//Definimos la aplicación como una función express
//Config de Mustache
app.set('views', __dirname + '/../views');  
app.set('view engine', 'html');
app.engine('html', mustacheExpress(), "html");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));
//Fin config de mustache

app.use('/', boardRouter);  //Usa las direcciones del boardRouter
app.listen(3000, () => console.log('Listening on port 3000!'));