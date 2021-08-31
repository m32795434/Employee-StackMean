//requiero la DB y luego toda la lógica del server.
require('./database');
const app = require('./app');

//arranco el servidor, en el puerto seteado en app.js
app.listen(app.get('port'));
console.log ('Server on port', app.get('port'));
