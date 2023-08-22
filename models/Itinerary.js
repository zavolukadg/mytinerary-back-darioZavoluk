import {model,Schema,Types} from 'mongoose';

let collection = 'itineraries'
let schema = new Schema({//name,price,duration,tags,photo
    name: {type:String,required:true},
    city_id:{type:Types.ObjectId,required:true,ref:'cities'}, 
    price: {type:Number,required:true,default:0},  
    duration: {type:Number}, 
    tags:{type:Array},
    photo: {type:String,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLwJ6jo2FZWe2gz_JXBWg5lwgxA1t88l5mtX1hVREj2xhclSxCMa2tbNp0mlDNG06QGQ&usqp=CAU"}
})

let Itinerary = model(collection,schema);
export default Itinerary;