//IMPORTS
import 'dotenv/config.js'; // importa unicamente la configuracion de las variables de entorno

import __dirname from './utils.js';  //importo la configuracion de la ubicacion del servidor

//var createError = require('http-errors');
import createError from 'http-errors'; // Para crear errores
//var express = require('express');
import express from 'express'   //Provee metodos y propiedades para levantar servidores
//var path = require('path');
import path from 'path';        //para conocer ubicacion de nuestro servidor
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
import logger from 'morgan'  

//var indexRouter = require('./routes/index'); //Solo vamos a configurar las rutas del enrutador de back principal
//este enrutador va a llamar a todos los otros recursos (cities, itineraries, users)
//var usersRouter = require('./routes/users');
import indexRouter from './routes/index.js';

var app = express(); //ejecutando este modulo de express CREO UNA APP DE BACKEN(SERVIDOR)

// view engine setup
//necesario para setear algo en este caso el motor de plantillas de vistas EJS
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

//MIDLEWARES
app.use(logger('dev'));   //Obligo al servidor a registrar una peticion con el modulo de logger/morgan
app.use(express.json());  //obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: false })); //obligo al servidor a leer params/queries
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //obligo al servidor a usar los archivos estaticos de la carpeta public

//ROUTER
app.use('/api', indexRouter);  //Obligo al servidor a que use las rutas del enrutador principal con "/api"
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
export default app
