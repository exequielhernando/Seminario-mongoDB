

// Cuando se crea un nuevo producto
exports.nuevoProducto = ( req, res, next ) => {
    // TODO Insertar en la base de datos

    res.json({  mensaje :  'El producto se agrego correctamente'});
}