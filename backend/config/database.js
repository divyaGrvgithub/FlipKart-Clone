const mongoose = require('mongoose');  
const MONGO_URI = process.env.MONGO_URI;  

const connectDatabase = () => {    
    mongoose.set('strictQuery', true)  
    mongoose.connect("mongodb+srv://divyamala_:Dt25042000knp@divyamala.0cofsch.mongodb.net/Flipkart",{
        useNewUrlParser: true   
   })    
        .then(() => {   
            console.log("Mongoose Connected");   
        });  
}  

module.exports = connectDatabase;   
