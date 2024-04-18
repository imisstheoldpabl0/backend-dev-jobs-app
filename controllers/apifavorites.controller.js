const addFavorite= require("../models/favorites.model");


// CREATE favorite
const createFavorite = async (req, res) => {
    try {
        const userId = req.user.id;
        const offerId = req.params.id;

        // Ver si la oferta de trabajo existe
        const jobOffer = await JobOffer.findById(id);
        if (!jobOffer) {
            return res.status(404).json({ error: 'Job offer not found' });
        }
        // Llamar a la función addFavorite para añadir la oferta como favorita en el registro
        await addFavorite(userId, offerId);

        res.status(200).json({ message: 'Job offer added to favorites successfully' });
    } catch (error) {
        console.error(`ERROR: ${error.stack}`);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createFavorite
};



