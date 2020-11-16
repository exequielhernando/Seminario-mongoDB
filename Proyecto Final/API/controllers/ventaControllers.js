const Venta = require('../models/Venta');
const Producto = require('../models/Producto');

exports.nuevaVenta = async ( req, res, next ) => {

    //Crear objeto venta con datos de req.body
    let total = 0;
    const venta = new Venta(req.body);
    for (let i = 0; i < venta.productos.length; i++) {
        let id = venta.productos[i].producto.id;
        let producto = Producto.findById(id)

        total += producto.precio;
    }
    venta.set(precio_total) = total;
    try {
        console.log(venta);
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

        const ventas = await Venta.find({});
        res.json(ventas); 
    } catch (error) {
        console.log(error);
        next();
    }

}

//Obtiene un producto id 
exports.obtenerVenta = async (req, res, next) => {
    try {
        const ventas = await Venta.findById(req.params.id);
        res.json(ventas);
    } catch (error) {
        console.log(error);
        next();
    }
}