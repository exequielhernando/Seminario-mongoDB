const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoControllers');
const ventaController = require('../controllers/ventaControllers');

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

    //Agregar nuevas ventas de productos
    router.post('/ventas',
        ventaController.nuevaVenta
    )

    //obtiene todas los regristros de ventas de la BD
    router.get('/ventas',
        ventaController.obtenerVentas
    )
    
    //obtener una venta id especifico
    router.get('/ventas/:id',
        ventaController.obtenerVenta
    )

    return router;
}