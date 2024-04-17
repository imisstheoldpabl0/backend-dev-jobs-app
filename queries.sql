
-- QUERIES DE INICIO

-- Create users table
CREATE TABLE users (
    id_user serial NOT NULL PRIMARY KEY, 
    name varchar(45) NOT NULL, 
    surname varchar(45) NOT NULL,
    location varchar(45) NOT NULL, 
    email varchar(255) NOT NULL UNIQUE,
    password varchar (12) NOT NULL,
    profile_pic varchar (255),
    rol varchar (12) NOT NULL DEFAULT 'candidate',
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
INSERT INTO users (name, surname, location, email, password, profile_pic, rol, log_status)
VALUES
    ('John', 'Doe', 'New York', 'john.doe@example.com', 'password123', 'profile.jpg', 'candidate', false),
    ('Jane', 'Smith', 'London', 'jane.smith@example.com', 'password456', 'profile.jpg', 'candidate', false),
    ('Michael', 'Johnson', 'Los Angeles', 'michael.johnson@example.com', 'password789', 'profile.jpg', 'candidate', false),
    ('Sarah', 'Williams', 'Paris', 'sarah.williams@example.com', 'passwordabc', 'profile.jpg', 'candidate', false),
    ('David', 'Brown', 'Berlin', 'david.brown@example.com', 'passworddef', 'profile.jpg', 'candidate', false),
    ('Emily', 'Taylor', 'Sydney', 'emily.taylor@example.com', 'passwordghi', 'profile.jpg', 'candidate', false),
    ('Daniel', 'Anderson', 'Tokyo', 'daniel.anderson@example.com', 'passwordjkl', 'profile.jpg', 'candidate', false),
    ('Olivia', 'Martinez', 'Rome', 'olivia.martinez@example.com', 'passwordmno', 'profile.jpg', 'candidate', false);

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
