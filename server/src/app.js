//LOGICA DEL SERVIDOR.
const express = require('express'); 
// middelware. ver peticiones http que van llegando al server. ej:GET /404 0.261 ms - 139
const morgan = require('morgan');


const app = express();
// process.env.PORT: si en el sistema Op hay un puerto definido para esta app, lo usa, si no, usa el 3000 
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
//so my app can parse json
app.use(express.json());
//so my app can parse urlencoded when data comes from html forms, for example.
app.use(express.urlencoded({ extended: false }));
// prefijos y carga de rutas en la app
app.use("/api/employees" ,require('./routes/employees.routes'));
app.use("/api/contacto" ,require('./routes/contacto.routes'));

module.exports = app;