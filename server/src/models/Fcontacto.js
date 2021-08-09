const {Schema, model} = require('mongoose');
const contactoSchema = new Schema(
    {
        nombre: {type: String, required: true},
        email: {type: String, required: true},
        edad: {type: String, required: true},
        pais: {type: String, required: true},
        comentario: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
module.exports = model('Fcontacto', contactoSchema);