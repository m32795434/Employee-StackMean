const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost/mean-employees",{
useUnifiedTopology: true,
useNewUrlParser: true,
useFindAndModify: false,
})
.then((db)=>console.log('db is connected'))
.catch((err)=>console.error(err));
    