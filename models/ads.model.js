/**
 * @fileoverview This file defines the routes for the ads model in the backend-dev-jobs-app.
 * @exports models
 * @namespace models
 */

/**
 * Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
 * It provides a straight-forward, schema-based solution to model your application data.
 * Learn more: {@link https://mongoosejs.com/}
 * @memberof requirements
 */
const mongoose = require('mongoose');
require('../config/db_mongo'); // Conexión a BBDD MongoDB

/**
 * @typedef {Object} objectSchema
 * @property {Number} id - The unique identifier for the ad.
 * @property {String} title - The title of the ad.
 * @property {String} company_name - The name of the company posting the ad.
 * @property {String} description - The description of the ad.
 * @property {String} location - The location of the job.
 * @property {String} logo - The URL of the logo image for the company.
 * @property {String} link - The URL of the ad.
 */
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