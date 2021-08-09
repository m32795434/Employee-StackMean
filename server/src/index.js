// import './database';

const app = require('./app');


// server en el 3000
app.listen(app.get('port'));
console.log ('server on port', app.get('port'));
