require('./database')
// const mongoo = require('./database');

const app = require('./app');


// server en el 3000
app.listen(app.get('port'));
console.log ('Server on port', app.get('port'));
