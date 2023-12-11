import express from 'express';
import * as server from './service.js';

const router = express.Router();

router.get('/', (req, res) => {             //Cuando se pide al router '/' redigiirá a la página de inicio
    res.render('principal', {               //Que se carguie la página de inicio
        sports: server.getSports()    //Los sport de la página de inicio se obtienen de la función get sport de server
    });
});

router.post('/sport/new', (req, res) => {    //Cuando se pida /sport/new entonces se llamará a la función de add.sport
    let { nombre, fecha, descripcion, img, tipo, check, reglamento } = req.body;            //Objeto de {nombre, fecha, descripcion} =req.body  
    server.addSport({ nombre, fecha, descripcion, img, tipo, check, reglamento });    //Se llama a la función add.Sport (objeto)
    res.render('saved_sport');                                                  //El servidor carga saved_sport
});

router.post('/newRegla/:id', (req,res) =>{
    let {nombre, info, dir} =req.body;
    let regla = {nombre, info, dir};
    server.addRule(req.params.id,regla);         
    let sport = server.getSport(req.params.id);       
    res.render("detail",{sport});        
})

router.get('/sport/:id', (req, res) => {
    let sport = server.getSport(req.params.id);
    res.render('detail', { sport });      //Se carga show_sport
});

router.get('/sport/:id/delete', (req, res) => {

    server.deleteSport(req.params.id);

    res.render('deleted_sport');
});

export default router;