// Importando el módulo 'express' y la función 'getSports' desde './server.js'
import express from 'express';
import { getSports } from './server.js';
import * as server from './server.js';

// Creando una instancia del enrutador de Express
const router = express.Router();

// Manejador de ruta para la ruta principal ('/')
router.get('/', (req, res) => {
    // Obteniendo deportes utilizando la función 'getSports'
    const sports = getSports(0,4); //Hace que se muestren sólo tres
    
    // Renderizando la vista 'index.html' con los deportes obtenidos
    res.render('index', {
        sports: sports
    });
});

//ID de un elemento
router.get('/sport/:id', (req, res) => {
    let sport = server.getSport(req.params.id);
    res.render('detail', { sport });   
});

// Manejador de ruta para la ruta '/sports'
router.get('/sports', (req, res) => {
    // Obteniendo los parámetros 'from' y 'to' de la consulta
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    // Obteniendo deportes utilizando la función 'getSports' con los parámetros de la consulta
    const sports = getSports(from,to);

    // Renderizando la vista 'server.html' con los deportes obtenidos
    res.render('sports', {
        sports: sports
    });
});
//FORMULARIO
//Dirección para el formulario de creación de elementos
router.get('/new', (req,res) =>{
    res.render('form');
})
//Creación de elementos
router.post('/sport/new', (req, res) => {   
    let { nombre, fecha, descripcion, img, tipo, check, reglamento } = req.body;        //Lo que encíamos a express       
    server.addSport({ nombre, fecha, descripcion, img, tipo, check, reglamento });      //Función add.Sport con un objeto Sport como parámetro
    res.redirect('/');                                                            //Lo que recibimos
});
//Eliminiación de un elemento
router.get('/sport/:id/delete', (req, res) => {
    server.deleteSport(req.params.id);
    res.redirect('/');  
});
//

// Exportando el enrutador para su uso en otros archivos
export default router;