const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');


//Crear el servidor
const server = express();
const app = http.createServer(server);
const io = socketio.listen(app);

//Conectar a mongod

mongoose.Promise = global.Promise;
/*mongoose.connect('mongodb://localhost/tecnocompras', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});*/
mongoose.connect('mongodb+srv://exequielh:12345@cluster0.tm4g5.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Habilitar el doby-parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//Habilitar routing
server.use('/', routes());

//setting
server.set('port', process.env.PORT || 3000);

//static files
server.use(express.static(path.join(__dirname, 'public')));

// puerto y arrancar el servidor

/*server.listen(4000, () => {
  console.log("Servidor funcionando");  
})*/

app.listen(server.get('port'), () =>{
  console.log(`server on port ${server.get('port')}`);
});