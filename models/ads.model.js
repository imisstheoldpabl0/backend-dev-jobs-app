const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB


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



// Insertar una oferta nueva

/* let newJob1 = {
      "id": 1,
      "title": "FullStack developer",
      "company_name": "Novanotio",
      "logo": "/Volumes/fullstack_thebridge/curso_fullstack/backend-dev-jobs-app/public/assets/logos_company_name/novanotio.jpg",
      "location": "Zaragoza",
      "mode": "Remote",
      "requirements": "No previous experience"
    }

 let newJob2 =  {
      "id": 2,
      "title": "Cybersecurity technician",
      "company_name": "Mnemo Security",
      "logo": "/Volumes/fullstack_thebridge/curso_fullstack/backend-dev-jobs-app/public/assets/logos_company_name/mnemo.png",
      "location": "La Coruña",
      "mode": "Presencial",
      "requirements": "No previous experience"
    }
    

let newJob3 ={
      "id": 3,
      "title": "Telecommunications engineer",
      "company_name": "GTT",
      "location": "Madrid",
      "mode": "Presencial",
      "requirements": "No previous experience",
      "logo": "/Volumes/fullstack_thebridge/curso_fullstack/backend-dev-jobs-app/public/assets/logos_company_name/gtt.jpg"
} 

// Guardar en la BBDD
Ads.create(newJob1,newJob2,newJob3)
.then((data)=>console.log(data))
.catch(err=>console.log(err)) */



//Ads.find({},{"Role": "FullStack developer","Company_name": "Novanotio"}).then(data=>console.log(data)); 

module.exports = Ads;