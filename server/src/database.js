//DATABASE CONEXION

const mongoose = require("mongoose");
const URL = "mongodb://localhost/mean-employees";

mongoose
    // a traves del protocolo de MongoDB nos conectamos a la DB
    .connect(URL,{
        // elimino mensajes de error de advertencia de MongoDB
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //without this property, findByIdAndUpdate() will not work
        useFindAndModify: false,
    })
    .then((db)=>console.log('DB is connected'))
    .catch((err)=>console.error(err));
module.exports = mongoose;