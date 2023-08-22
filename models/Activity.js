import {model,Schema,Types} from 'mongoose';

let collection = 'activities'
let schema = new Schema({//name,photo
    name: {type:String,required:true},
    photo: {type:String,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLwJ6jo2FZWe2gz_JXBWg5lwgxA1t88l5mtX1hVREj2xhclSxCMa2tbNp0mlDNG06QGQ&usqp=CAU"},
    itinerary_id:{type:Types.ObjectId,required:true,ref:'itineraries'}
})

let Activity = model(collection,schema);
export default Activity;