const { Schema, model } = require("mongoose");

const concatoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // required: true,
        unique: true
    },
    telefono: {
        type: String
    }
})
module.exports = model("Contacto", concatoSchema)