const mongoose = require('mongoose');
require('../config/db_mongo'); // Conexión a BBDD MongoDB

const objectSchema = {
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    company_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        validate: {
            validator: function (url) {
                if (url.indexOf('.jpg') != -1 || url.indexOf('.png') != -1)
                    return true;
                else {
                    return false;
                }
            },
            message: "Porfa, sólo imágenes JPG o PNG"
        }
    },
    link: {
        type: String,
        required: true
    }
};

// Crear el esquema
const adsSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Ads = mongoose.model('Ads', adsSchema);

module.exports = Ads;