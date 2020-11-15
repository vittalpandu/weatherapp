const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userinfo", {
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("database connection is successful");
}).catch((e)=>{
    console.log("could not connect to database");
})