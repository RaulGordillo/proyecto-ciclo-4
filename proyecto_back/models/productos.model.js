const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    producto_id:{type: String, required: true, max:60},
    nombre:{type: String, required: true, max:60},
    tiempo_uso:{type: String, required: true, max:60},
    precio:{type: String, required: true, max:60},
    tipo:{type: String, required: true, max:70},
    descripcion:{type: String, required: true, max:300},
    mail:{type: String, required: true, max:70},
    telefono:{type: String, required: true, max: 12}
    
});

module.exports = mongoose.model("productos", ProductosSchema);