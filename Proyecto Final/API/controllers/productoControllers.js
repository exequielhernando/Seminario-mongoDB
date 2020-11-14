const Producto = require('../models/Producto');

// Cuando se crea un nuevo producto
exports.nuevoProducto = async ( req, res, next ) => {
    // TODO Insertar en la base de datos
    //Crear objeto producto con datos de req.body
    const producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({  mensaje :  'El producto se agrego correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }

}

//Obtiene todos los productos

exports.obtenerProductos = async (req, res, next) => {
    try {
        const productos = await Producto.find({});
        res.json(productos); 
    } catch (error) {
        console.log(error);
        next();
    }

}

//Obtiene un producto id 
exports.obtenerProducto = async (req, res, next) => {
    try {
        const producto = await Producto.findById(req.params.id);
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Actualizamos un producto por un id
exports.actualizarProducto = async (req, res, next) => {
    try {
        const producto = await Producto.findOneAndUpdate({_id : req.params.id}, req.body, {
            new :true
        });
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminamos un producto por un id
exports.eliminarProducto = async (req, res, next) => {
    try {
        await Producto.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El producto fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}