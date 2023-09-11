import {model,Schema} from 'mongoose';

//Primero definimos el modelo de datos o coleccion
let collection = 'users'
//Definimos el esquema de datos del modelo, forma del modelo de datos
let schema = new Schema({
    name: {type:String,required:true}, //por defaul son todos opcionales
    lastName: {type:String},
    mail: {type:String,required:true,unique:true},
    photo: {type:String,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLwJ6jo2FZWe2gz_JXBWg5lwgxA1t88l5mtX1hVREj2xhclSxCMa2tbNp0mlDNG06QGQ&usqp=CAU"},
    password: {type:String,required:true}, 
    country: {type:String,required:true}, 
})

let User = model(collection,schema);
export default User;
