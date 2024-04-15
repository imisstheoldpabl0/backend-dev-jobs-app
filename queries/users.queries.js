const usersQueries = {
    
    //Crea un listado de todos los usuarios. Para la /dasboard en admin
    getAllUsers: `
        SELECT *  FROM users
    `,

    //Recupera  los datos de un usuario: para visualizar los  datos del propio  perfil (admin y user)
    getUserByEmail:`
    SELECT *  FROM users
    WHERE email=$1;
    `,

    // Crea un usuario nuevo. Cuando alguien se registra (candidato) o cuando el admin da de alta a otro admin.
    createUser: `
    INSERT INTO users ( 
        rol,
        email,
        password)
    VALUES ($1, $2);
    `,

    // Actualiza datos del usuario. Si se actualizan los datos del propio perfil, o el admin  el perfil  de  otro usuario.
    updateUser:`
    UPDATE users
    SET
        rol=$1, 
        name=$2, 
        surname=$3, 
        email=$4,
        password=$5,
    WHERE 
        email = $6;
    `,
    
    // Cambia log_status en users a true
    updateToLogin:`
     UPDATE users 
     SET log_status=true  
    WHERE email = $1 && password = $2;
    `,
    
    // Cambia log_status en users a true cuando se  pulsa logout
    updateToLogout:`
    UPDATE users 
    SET log_status=false  
    WHERE email = $1;
    `,
   
    // Reestablece el valor de la contarseña: en /restorepassword para user y admin
    updatePassword:`
    UPDATE password
    SET password=$1
    WHERE email=$2;
    `,
    
    // Elimina un usuario:  para admin
    deleteUser:`
    DELETE FROM users
    WHERE email = $1;
    `
    }

    module.exports = usersQueries