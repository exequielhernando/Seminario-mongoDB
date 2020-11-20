const mongoose = require('mongoose');
const Venta = require('../models/Venta');
const Producto = require('../models/Producto');

exports.nuevaVenta = async ( req, res, next ) => {

    //Crear objeto venta con datos de req.body
    const venta = new Venta(req.body);
   
    let ids = venta.productos;
    let totalProductos = await Producto.find({'_id':{$in:ids}});
    totalProductos.forEach(producto => {
        venta.precio_total += producto.populate('precio').precio;
        producto.stock--;
        producto.save();
    });

    try {
        await venta.save();
        res.json({  mensaje :  'La venta se agrego correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }

}

//Obtiene todas las ventas

exports.obtenerVentas = async (req, res, next) => {
      
    try {
        const ventas = await Venta.find({}).populate('productos');
        res.json(ventas); 
    } catch (error) {
        console.log(error);
        next();
    }

}

//Obtiene un producto id 
exports.obtenerVenta = async (req, res, next) => {
    try {
        const ventas = await Venta.findById(req.params.id).populate('productos');
        res.json(ventas);
    } catch (error) {
        console.log(error);
        next();
    }
}