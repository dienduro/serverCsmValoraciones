const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//route 
const routes = require('./Routes/routes');


//DB Configuration
const {dbConnection} = require('./database/config');

dbConnection();
app.use('/',routes);

//puerto dinamico
require('dotenv').config();
port = process.env.PORT ;


/* //Path público

const publicPath = path.resolve( __dirname, 'public',); */
//se lleva la ruta que muestra al servicio un html o json especificada 
/* app.use(express.static(publicPath)); */

app.listen(port,(err)=>{
    if(err) throw new Error(err);

    console.log('Servidor corriendo en puerto!!: '+ port);
})