const Venta = require('../models/Venta');
const Producto = require('../models/Producto');

exports.nuevaVenta = async ( req, res, next ) => {

    const venta = new Venta(req.body);    
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
    let type = req.query.type    
    let items = req.query.id         
    if(type === "array"){         
        let ids = req.query.id.split(',')         
        items = []         
        items = ids.map(item => {  

            // Convertirlos en ObjectId de Mongoose            
            return mongoose.Types.ObjectId(item)         
        })
    }
   
    try {
        const ventas = await Venta.find({});
        ventas
        .find({ '_id': {$in:items}})
        .populate("brand")
        .populate("wood")
        .exec((err, docs)=> {
            return res.status(200).send(docs)     
        }) 
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