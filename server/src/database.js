const mongoose = require('mongoose');

mongoose
.conect('mongodb://localhost/mean-employees')
.then((db)=>console.log('db is conceted'))
.catch((err)=>console.error(err));
    