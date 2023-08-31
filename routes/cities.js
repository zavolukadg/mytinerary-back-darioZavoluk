import express from 'express';
import create from '../controllers/cities/create.js'
import read from '../controllers/cities/read.js'
import readOne from '../controllers/cities/readOne.js'
import update from '../controllers/cities/update.js'
import destroy from '../controllers/cities/destroy.js'
import carousel from '../controllers/cities/carousel.js'

let cityRouter = express.Router();

cityRouter.post('/', create)
cityRouter.get('/', read)
cityRouter.get('/carousel', carousel)
cityRouter.get('/:id', readOne) 
cityRouter.put('/:u_id', update)
cityRouter.delete('/:id', destroy)
///los endpoints que lleven params van siempre al final para que no me detecte la ruta como params
//El nombre que utilizo en el enrutador tiene que ser el mismo que el endpoint

export default cityRouter;
