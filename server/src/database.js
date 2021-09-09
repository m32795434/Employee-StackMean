//DATABASE CONEXION

const mongoose = require("mongoose");
const URL = "mongodb://localhost/mean-employees";

mongoose
    //we conect to the DB using the URL
    .connect(URL,{
        //we delete the warnigns messages
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //without this property, findByIdAndUpdate() will not work
        useFindAndModify: false,
    })
    .then((db)=>console.log('DB is connected'))
    .catch((err)=>console.error(err));
module.exports = mongoose;