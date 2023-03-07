const app = require("./app");
const PORT = 3001;
const dotenv = require('dotenv');
const mongoose = require("mongoose");


dotenv.config({path:"./config.env"});

const DB = process.env.DATABASE.replace("<PASSWORD>",process.env.DATABASE_PASSWORD);
console.log(DB);

mongoose.connect(DB,{
  useNewUrlParser:true
})
  .then(()=>{
    console.log("Connected to MongoDB");
  })
  .catch((err)=>{
    console.log(err);
    console.log("Couldn't connect to MongoDB");
  })




app.listen(PORT,()=>{
    console.log(`Server Started at port: ${PORT}`);
});