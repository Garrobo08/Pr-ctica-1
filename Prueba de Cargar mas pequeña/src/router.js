// Importando el módulo 'express' y la función 'getSuperheroes' desde './superheroes.js'
import express from 'express';
import { getSuperheroes } from './superheroes.js';

// Creando una instancia del enrutador de Express
const router = express.Router();

// Manejador de ruta para la ruta principal ('/')
router.get('/', (req, res) => {
    // Obteniendo superhéroes utilizando la función 'getSuperheroes'
    const superheroes = getSuperheroes(0,4); //Hace que se muestren sólo tres
    
    // Renderizando la vista 'index.html' con los superhéroes obtenidos
    res.render('index', {
        superheroes: superheroes
    });
});

// Manejador de ruta para la ruta '/superheroes'
router.get('/superheroes', (req, res) => {
    // Obteniendo los parámetros 'from' y 'to' de la consulta
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    // Obteniendo superhéroes utilizando la función 'getSuperheroes' con los parámetros de la consulta
    const superheroes = getSuperheroes(from,to);

    // Renderizando la vista 'superheroes.html' con los superhéroes obtenidos
    res.render('superheroes', {
        superheroes: superheroes
    });
});

// Exportando el enrutador para su uso en otros archivos
export default router;