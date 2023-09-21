const { Schema, model } = require('mongoose')
const TerremotoSchema = Schema({
    fecha: {
        type: String,
        required: [true, 'La fecha es obligatoria!']
    },
    magnitud: {
        type: String,
        required: [true, 'La magnitud es obligatoria!']
    },
    ubicacion: {
        type: String,
        required: [true, 'La ubicación es obligatoria!']
    }
})
module.exports = model('Terremoto', TerremotoSchema)