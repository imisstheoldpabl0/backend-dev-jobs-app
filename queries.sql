-- ADMIN QUERIES /api/user
constAdminQueries = {
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
    postCreateUser: `
    INSERT INTO users
        VALUES
            username = $1,
            email = $2,
            password = $3,`
}

-- COMMON QUERIES /api/user
const commonQueries = {
    -- actualiza el perfil del usuario logueado checkeando que el username y password sean correctos
    putUpdateUser: `
        UPDATE users
        SET name = $1,
            surname = $2,
            location = $3,
            email = $4,
            image = $5
        WHERE username = $5
        AND password = $6;`
}
