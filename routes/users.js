import express from 'express';
import mongoose from 'mongoose';
import create from '../controllers/users/create.js'
import read from '../controllers/users/read.js'
import readOne from '../controllers/users/readOne.js'
import update from '../controllers/users/update.js'
import destroy from '../controllers/users/destroy.js'

let userRouter = express.Router();

//Metodos http para crear POST, para leer es GET, para actualizar es PUT/PATCH y para eliminar es delete.
//Cada vez que se llama a un POST se crearan recursos
//Cada vez que se realizo una peticion GET, se leeran recursos

//req es el objeto donde el cliente me manda muchos datos importantes acerca de la peticion
//las propiedades mas importantes son:
//BODY: objeto que generalmente se envia a traves de formularios
//PARAMS: suelen ser estaticos como el id de una ciudad a buscar por ejemplo
//QUERIES: son opcionales y nos indican algunas consultas/filtros/modos de ver la informacion de pagina

/* router.get('/', function(req, res, next) {
  res.send('respond with all users');
}); */

userRouter.post('/', create)
userRouter.get('/', read)
userRouter.get('/:id', readOne) //El nombre del parametro puede ser cualquier pero en el enrutador y controlador deben ser iguales
userRouter.put('/:u_id', update)
userRouter.delete('/:id', destroy)

export default userRouter;
