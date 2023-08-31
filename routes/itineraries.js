import express from 'express';
import create from '../controllers/itineraries/create.js'
import read from '../controllers/itineraries/read.js'
import readOne from '../controllers/itineraries/readOne.js'
import update from '../controllers/itineraries/update.js'
import destroy from '../controllers/itineraries/destroy.js'

let itineraryRouter = express.Router();

itineraryRouter.post('/', create)
itineraryRouter.get('/', read)
itineraryRouter.get('/:id', readOne) 
itineraryRouter.put('/:u_id', update)
itineraryRouter.delete('/:id', destroy)

export default itineraryRouter;
