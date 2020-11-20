const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    
    nombre:{
        type: String,
        trim: true,
    },
    descripcion:{
        type: String,
        trim:true,
    },
    stock:{
        type: Number,
        trim:true,
    },
    precio:{
        type: Number,
        trim:true,
    }

});

module.exports = mongoose.model('Producto', productosSchema);