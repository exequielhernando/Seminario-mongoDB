const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ventasSchema = new Schema({
    productos:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Producto'
    }],
    direccion_entrega:{
        type: String,
        trim:true,
    },
    precio_total:{
        type: Number,
        trim:true,
    }    


})

module.exports = mongoose.model('Venta', ventasSchema);