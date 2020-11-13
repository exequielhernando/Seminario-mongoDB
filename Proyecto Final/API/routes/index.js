const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoControllers');

module.exports = function () {

    //Agrega nuevos productos via POST
    router.post('/productos',
        productoController.nuevoProducto
    )


    return router;
}