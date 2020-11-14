const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoControllers');

module.exports = function () {

    //Agrega nuevos productos via POST
    router.post('/productos',
        productoController.nuevoProducto
    )
    
    //obtiene todos los regristros de productos de la BD
    router.get('/productos',
        productoController.obtenerProductos
    )
    
    //obtener un producto id especifico
    router.get('/productos/:id',
        productoController.obtenerProducto
    )

    //Actualizar un regristro con un id especifico
    router.put('/productos/:id',
        productoController.actualizarProducto
    )

    //Eliminar un producto por un id
    router.delete('/productos/:id',
        productoController.eliminarProducto
    )
    return router;
}