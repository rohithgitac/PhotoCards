import mongoose from "mongoose";


 const cardSchema = mongoose.Schema({
    name:String,
    imgUrl:String
 })

 export const Card = mongoose.model('card',cardSchema)