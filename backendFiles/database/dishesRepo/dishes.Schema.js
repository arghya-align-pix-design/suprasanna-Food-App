import mongoose from "mongoose";

export const  dishSchema= new mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    category:String,   
    imageURL: String,
})