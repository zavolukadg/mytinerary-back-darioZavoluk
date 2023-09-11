import { Router } from 'express';
import register from '../controllers/auth/register.js'
import signin from '../controllers/auth/signin.js'
import signout from '../controllers/auth/signout.js'
import token from '../controllers/auth/token.js'
import validator from '../schema/validator.js';
import registerSchema from '../schema/register.js';
import signinSchema from '../schema/signin.js';
import existsUser from '../middlewares/existsUser.js';
import isValidPass from '../middlewares/isValidPass.js';
import notExistUser from '../middlewares/notExistUser.js';
import isPassOk from '../middlewares/isPassOk.js';
import isValidToken from '../middlewares/isValidToken.js';
import passport from '../middlewares/passport.js';

let authRouter = Router();

//register requiere de middlewares para VALIDAR/VERIFICAR 
//validar datos con joi con validator
authRouter.post('/register',validator(registerSchema), existsUser, isValidPass,register)
authRouter.post('/signin',validator(signinSchema), notExistUser, isPassOk, isValidToken,signin)
authRouter.post('/token',passport.authenticate('jwt',{session:false}),isValidToken,token) //Necesita 2 middlewares
authRouter.post('/signout',passport.authenticate('jwt',{session:false}), signout)
//Pasport utiliza una estrategia para destokenizar los datos del token guardado en local storage 

export default authRouter;
