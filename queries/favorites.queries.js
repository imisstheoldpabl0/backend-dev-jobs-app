const favoritesQueries = {
  //  Carga los favortios de un usuario por email - para admiin y user
  getFavoritesByEmail: `
    SELECT * FROM favorites
    WHERE email  = $1;`,
    
  // Crea un registro en favoritos con el id_user e id_job_offer cogido de la  colección jobs_offer de Mongo (cuando hace clic en una estrelal y activa como favorita una oferta)
  addFavorite: `
    INSERT INTO favorites (id_job_offer)
    VALUES 
    id_job_offer=$1,
    WHERE id_user = $2;
    `,

  // Eimina un favorito (cuando un usuario hace click en la estrella para desactivarla
  deleteFavorite: ` 
    DELETE FROM favorites 
    WHERE id_job_offer=$1;
    `
};

module.exports = favoritesQueries;