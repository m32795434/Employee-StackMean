const express = require('express'); 
const morgan = require('morgan');


const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/employees" ,require('./routes/employees.routes'));
app.use("/api/contacto" ,require('./routes/contacto.routes'));

module.exports = app;