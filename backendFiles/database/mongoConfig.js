// mongoConfig.js
import mongoose from "mongoose";
import mongodb,{MongoClient} from "mongodb";
import dotenv from "dotenv";
// MongoDB connection URL
dotenv.config();
const mongoURI = process.env.DB_URL;
//let mongoClient;

// Connect to MongoDB
const connectUsingMongoose= async() =>{
  try{
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to mongodb successfully");
  }catch(err) {
    console.log("Error happened while connecting to mongodb");
    console.log(err);
  }
}


// Check if the connection is successful
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// module.exports = db;
connectUsingMongoose();
