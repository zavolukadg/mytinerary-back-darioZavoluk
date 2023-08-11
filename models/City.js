import {model,Schema,Types} from 'mongoose';

//Primero definimos el modelo de datos o coleccion
let collection = 'cities'
//Definimos el esquema de datos del modelo, forma del modelo de datos
let schema = new Schema({
    country: {type:String,required:true}, //por defaul son todos opcionales
    fundation: {type:Date}, //por defaul son todos opcionales
    population: {type:Number}, 
    photo: {type:String,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLwJ6jo2FZWe2gz_JXBWg5lwgxA1t88l5mtX1hVREj2xhclSxCMa2tbNp0mlDNG06QGQ&usqp=CAU"},
    city: {type:String,required:true},
    description: {type:String,default:"Edit Later"}, 
    smalldescription: {type:String,default:"Edit Later"}, 
    featuredLocation:{type:String,default:"Edit Later"},
    admin_id:{type:Types.ObjectId,required:true,ref:'users'}  
})

let City = model(collection,schema);
export default City;