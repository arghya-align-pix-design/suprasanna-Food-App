import mongoose from "mongoose";
const {Schema}=mongoose;

//Bydefault, mongoose will add id in the order
export const Orders= new Schema({
   name:String,
   price: Number,
   category: String,
   date:{type:Date, default:Date.now}, 
})