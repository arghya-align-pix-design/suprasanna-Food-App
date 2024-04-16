import mongoose from "mongoose";
import {userSchema} from "../user.schema.js";

//creating model for schema
const UserModel=mongoose.model('User', userSchema);

export default class UserRepository{
    async signUp(user){
        try{
           //create the instance of model
           const newUser=new UserModel(user);
           const data=await newUser.save();
           console.log(`&{data}`);
           return newUser;
        }
        catch(err){
            console.log("error happpened in userRepo , SignUp")
            console.log(err);
        }
    }

    async signIn(email, password){
        try{
            return await UserModel.findOne({email, password});
        }
        catch(err){
            console.log("error happened in userRepo, signIn");
            console.log(err);
        }
    }
    
    //asybchronous method to find the user using email
    async findByEmail(email){
        try{
            return await UserModel.findOne({email});
        }
        catch(err){
            console.log("error happened in userRepo, findByEmail");
            console.log(err);
        }
    }
    
    //asynchronous method to find the user order using email
    async findOrder(email){
        try{
            return await UserModel.findOne({email});
        }
        catch(err){
            console.log("error happened in userRepo, findOrder");
            console.log(err);
        }
    }

}