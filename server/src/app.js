const express = require('express'); 
const morgan = require('morgan');


const app = express();
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use("/api/employees" ,require('./routes/employeers.routes'));
// app.use("/api/contacto" ,require('./routes/contacto.routes'));

module.exports = app;