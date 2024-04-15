
-- QUERIES DE INICIO

-- Create users table

CREATE TABLE users (
    id_user serial NOT NULL PRIMARY KEY, 
    rol varchar (12) NOT NULL DEFAULT 'candidate',
    name varchar(45) NOT NULL, 
    surname varchar(45) NOT NULL, 
    email varchar(255) NOT NULL UNIQUE,
    password varchar (12) NOT NULL,
    profile_pic varchar (255), 
    log_status boolean DEFAULT false
);

-- Crear tabla favoritos

CREATE TABLE favorites (
    id_favorite serial NOT NULL PRIMARY KEY, 
    id_user int,
    FOREIGN KEY (id_user) REFERENCES users(id_user),
    id_job int NOT NULL FOREIGN KEY
);


-- Insertar datos en tabla users
INSERT INTO users (rol, name, surname,email,password)
VALUES
('admin','María','Torres', 'mariatorres@jobapp.com','amllsñlkj'),
('admin','Borja','Ramírez', 'borja@jobapp.com','dkecij6873'),
('candidate','Adam','Hollister', 'adam@gmail.com','alkjehyyat'),
('candidate','Jennifer','Strauss', 'jenny@yahoo.com','dkekkcise45'),
('candidate','Ariadna','Alexander', 'gema@yahoo.com','6234¿¿eeds'),
('candidate','Steven','Marshall', 'steve@gmail.com','ñllkejña'),
('candidate','Roberta','del Pino', 'roberta@terra.com','ñalkjeñf'),
('candidate','Carlos','Sotomayor', 'carlos@gmail.com','añklejñs');

-- ADMIN QUERIES /api/user
const AdminQueries = {
    -- selecciona todos los usuarios
    getAllUsers: `
    SELECT * FROM users;`
    -- borra a un usario dependiendo de su username
    deleteUser: `
    DELETE FROM users
    WHERE username = $1;`
}

-- USER QUERIES /api/user
-- (al crearse la tabla users, y crearse una cuenta, solo deberian rellenarse los campos de username y email, y password, y posteriormente se podra actualizar el resto de campos una vez se edite el perfil)
const userQueries = {
    createUser: `
    INSERT INTO users
        VALUES
            username = $1,
            email = $2,
            password = $3,`
}

-- COMMON QUERIES /api/user
const commonQueries = {
    -- actualiza el perfil del usuario logueado checkeando que el email sea correcto
    updateUser: `
        UPDATE users
        SET 
            name = COALESCE($1, name),
            surname = COALESCE($2, surname),
            location = COALESCE($3, location),
            email = COALESCE($4, email),
            password = COALESCE($5, password),
            profile_pic = COALESCE($6, profile_pic)
        WHERE email = $7;`
    loginUser: `
    UPDATE users
    SET log_status = TRUE
    WHERE email = $1 AND password = $2;`
};
