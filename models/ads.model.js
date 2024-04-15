const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    id: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
    },
    company_name: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true
    },
    requeriments: {
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
    }
};

// Crear el esquema
const adsSchema = mongoose.Schema(objectSchema);


// Crear el modelo --> Colección
const Ads = mongoose.model('Ads', adsSchema);



// Insertar una oferta nueva
/*
let newJob1 = {
      "Role": "FullStack developer",
      "Company_name": "Novanotio",
      "Logo": "/Volumes/fullstack_thebridge/curso_fullstack/backend-dev-jobs-app/public/assets/logos_company_name/novanotio.jpg",
      "Location": "Zaragoza",
      "Time": "Full",
      "Mode": "Remote",
      "Requirements": "No previous experience"
    }

 let newJob2 = {
      "Role": "Cybersecurity technician",
      "Company_name": "Mnemo Security",
      "Logo": "/Volumes/fullstack_thebridge/curso_fullstack/backend-dev-jobs-app/public/assets/logos_company_name/mnemo.png",
      "Location": "La Coruña",
      "Time": "Part-time",
      "Mode": "Presencial",
      "Requirements": "No previous experience"
    }

// Guardar en la BBDD
Ads.create(newJob1, newJob2, newJob3)
.then((data)=>console.log(data))
.catch(err=>console.log(err))
*/


//Product.find({},{"Role": "FullStack developer","Time": "Full","Company_name": "Novanotio",).then(data=>console.log(data)); 

module.exports = Ads;