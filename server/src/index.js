//requiero la DB y luego toda la lógica del server.
require('./database');
const app = require('./app');

//start the server on port declarated in app.js
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get("port")}`)
});
