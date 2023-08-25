import express from 'express';
import create from '../controllers/activities/create.js'
import read from '../controllers/activities/read.js'
import readOne from '../controllers/activities/readOne.js'
import update from '../controllers/activities/update.js'
import destroy from '../controllers/activities/destroy.js'

let activityRouter = express.Router();

activityRouter.post('/', create)
activityRouter.get('/', read)
activityRouter.get('/:id', readOne) 
activityRouter.put('/:u_id', update)
activityRouter.delete('/:id', destroy)

export default activityRouter;
