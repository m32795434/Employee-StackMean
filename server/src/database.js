//CONEXIÓN A LA BASE DE DATOS

const mongoose = require("mongoose");

mongoose
    // a traves del protocolo de MongoDB nos conectamos a la DB
    .connect("mongodb://localhost/mean-employees",{
        // elimino mensajes de error de advertencia de MongoDB
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //without this property, findByIdAndUpdate() will not work
        useFindAndModify: false,
    })
    .then((db)=>console.log('db is connected'))
    .catch((err)=>console.error(err));
    