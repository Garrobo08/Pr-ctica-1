import express from 'express';
import * as boardService from './boardService.js';

const router = express.Router();

router.get('/', (req, res) => {         //Cuando se pide al router '/' redigiirá a la página de inicio
    res.render('principal', {               //Que se carguie la página de inicio
        sports: boardService.getSports()  //Los sport de la página de inicio se obtienen de la función get sport de boardService
    });
});

router.post('/sport/new', (req, res) => {    //Cuando se pida /sport/new entonces se llamará a la función de add.sport

    let { nombre, fecha, descripcion, img } = req.body;           //Objeto de {nombre, fecha, descripcion} =req.body  
    boardService.addSport({ nombre, fecha, descripcion,img });    //Se llama a la función add.Sport
    res.render('saved_sport');                                    //Respuesta, se carga saved_sport
});

router.get('/sport/:id', (req, res) => {
    let sport = boardService.getSport(req.params.id);
    res.render('show_sport', { sport });      //Se carga show_sport
});

router.get('/sport/:id/delete', (req, res) => {

    boardService.deleteSport(req.params.id);

    res.render('deleted_sport');
});

export default router;