import express from 'express';
import * as server from './service.js';

//Creamos una instancia para Express
const router = express.Router();


//Cargar la página principal junto con los deportes que se han creado (por defecto o en ejecución)
router.get('/', (req, res) => {            
    res.render('principal', {              
        sports: server.getSport1(0,3)    
    });
});


/*
//Cargar la página principal junto con los deportes que se han creado (por defecto o en ejecución)
router.get('/', (req, res) => {            
    res.render('principal', {              
        sports: server.getSport1(0,3) 
    });
});
*/
/*
// Manejador de ruta para la ruta '/more' es la que habrá que poner en app.js
router.get('/more', (req, res) => {
    // Obteniendo los parámetros 'from' y 'to' de la consulta
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    // Obteniendo sport utilizando la función 'getgetSport1' con los parámetros de la consulta
    const deporte = server.getSport1(from,to);

    // Renderizando la vista 'sport.html' con los deportes obtenidos
    res.render('sport', {
        sport: deporte
    });
});

*/
//Creación de elementos
router.post('/sport/new', (req, res) => {   
    let { nombre, fecha, descripcion, img, tipo, check, reglamento } = req.body;        //Lo que encíamos a express       
    server.addSport({ nombre, fecha, descripcion, img, tipo, check, reglamento });      //Función add.Sport con un objeto Sport como parámetro
    res.redirect('/');                                                            //Lo que recibimos
});

//Creación de subelementos
router.post('/newRegla/:id', (req,res) =>{      
    let {nombre, info, dir} =req.body;
    let regla = {nombre, info, dir};
    server.addRule(req.params.id,regla);         
    let sport = server.getSport(req.params.id);       
    res.render("detail",{sport});        
})

//ID de un elemento
router.get('/sport/:id', (req, res) => {
    let sport = server.getSport(req.params.id);
    res.render('detail', { sport });   
});
//Dirección para el formulario de creación de elementos
router.get('/new', (req,res) =>{
    res.render('form');
})
//Eliminiación de un elemento
router.get('/sport/:id/delete', (req, res) => {
    server.deleteSport(req.params.id);
    res.redirect('/');  
});

//Editamos el elemento del id seleccionado
router.get('/editar/:id', (req, res) =>{
    let sport = server.getSport(req.params.id);
    res.render("edit_sport",{sport});
})

//Proceso de edición
router.post('/modify/:id', (req,res)=>{
    let { nombre, fecha, descripcion, img, tipo, check } = req.body;    //Envíamos
    let sport ={ nombre, fecha, descripcion, img, tipo, check};         //Objeto con los mismos parámetros que un elemento (deporte)
    server.editSport(req.params.id, sport);                             //Función editSport(id,sport)
    sport = server.getSport(req.params.id);                             //getSport(id)
    res.render("detail",{sport});                                       //Express devuelve la página detail cargada con los nuevos parámetros de sport
})


export default router;