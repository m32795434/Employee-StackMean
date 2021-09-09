// I require the DB and all the server logic.
require('./database');
const app = require('./app');

//start the server on port declarated in app.js
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get("port")}`)
});
