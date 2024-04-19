/******************** ads.model.js ************************/
// Insertar una oferta nueva
let newJob1 = {
    "id": 1,
    "title": "FullStack developer",
    "company_name": "Novanotio",
    "logo": "/Volumes/fullstack_thebridge/curso_fullstack/backend-dev-jobs-app/public/assets/logos_company_name/novanotio.jpg",
    "location": "Zaragoza",
    "mode": "Remote",
    "requirements": "No previous experience"
};

let newJob2 = {
    "id": 2,
    "title": "Cybersecurity technician",
    "company_name": "Mnemo Security",
    "logo": "/Volumes/fullstack_thebridge/curso_fullstack/backend-dev-jobs-app/public/assets/logos_company_name/mnemo.png",
    "location": "La Coruña",
    "mode": "Presencial",
    "requirements": "No previous experience"
};

let newJob3 = {
    "id": 3,
    "title": "Telecommunications engineer",
    "company_name": "GTT",
    "location": "Madrid",
    "mode": "Presencial",
    "requirements": "No previous experience",
    "logo": "/Volumes/fullstack_thebridge/curso_fullstack/backend-dev-jobs-app/public/assets/logos_company_name/gtt.jpg"
};

//Guardar en la BBDD
Ads.create(newJob1, newJob2, newJob3)
    .then((data) => console.log(data))
    .catch(err => console.log(err));

Ads.find({}, { "Role": "FullStack developer", "Company_name": "Novanotio" }).then(data => console.log(data));


/******************** users.model.js ************************/
//Autenticación: recibe dato email y contraseña y si son correctos devuelve "usuario y password correctos" 

// Búsqueda por e-mail de un usuario 
const verifyUser = async (currentEmail, currentPassword) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getUserByEmail, [email]);
        result = data.rows;
        if (data[0].email == currentEmail && data[0].password == currentPassword) {
            res.status(200).json({ msg: "Right username and password" });
        } else {
            res.status(200).json({ msg: "Incorrect username and password" });
        }
    }
    catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
};

//PRUEBAS

let loginUser = "Pahgnueggla@caramelos.es";

getUserByEmail(loginUser)
    .then(data => console.log(data));

let newUser = {
    name: "MAAAAanuehjgjhfgjhfla",
    surname: "Ájgfhjglvjbgarez",
    location:"New ggYork",
    email: "Pahgnueggla@caramelos.es",
    password: "ñlksie8747"
};

createUser(newUser)
    .then(data => console.log(data));

// UPDATE - PUT methods
const updateUser = async () => {
  let client,result;
  try{
      client = await pool.connect();
      const data = await client.query(queries.updateUser);
      result = data.rows;
  } catch(err) {
      console.log(err);
      throw err;
  }finally{
      client.release();    
  }
  return result;
};