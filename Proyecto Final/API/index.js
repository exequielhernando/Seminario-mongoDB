const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//Crear el servidor
const server = express();

//Conectar a mongod
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tecnocompras', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Habilitar routing
server.use('/', routes());


// puerto y arrancar el servidor

server.listen(4000, () => {
  console.log("Servidor funcionando");  
})
