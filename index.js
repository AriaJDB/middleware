const express = require ("express");
require('dotenv').config();
const app = express();
const index = require('./rutas');
const saludo = require('./rutas');
const fecha = require('./rutas');

app.use('/', index);
app.use('/saludo', saludo);
app.use('/fecha', fecha);


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("servidor en http://localhost:"+port);
    
});