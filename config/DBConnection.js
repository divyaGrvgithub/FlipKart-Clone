const mongoose = require("mongoose");
require("dotenv").config({path:"./.env"});
const _DBUrl =process.env.DB;

mongoose.set('strictQuery', true); 
mongoose
  .connect("mongodb+srv://divyamala_:Dt25042000knp@divyamala.0cofsch.mongodb.net/Flipkart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Connected Successful")).catch((err) => console.log(`Connection failed ! Error : ${err}`));
