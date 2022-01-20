const express = require('express');
const mysql = require('mysql');
const myConn = require('express-myconnection');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 3001);
const dbOptions = {
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : null, 
    data : 'challenge'
}


//middlewares 
app.use(myConn(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(cors());

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my Alkemy challenge')
});
app.use('/api', routes);

//server running 
app.listen(app.get('port'), () => console.log('Server running in the port', app.get('port')));