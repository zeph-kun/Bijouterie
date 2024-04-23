module.exports = {
    components: {
        schemas: {
            Location: {
                type: 'object',
                properties: {
                    id: { type: 'integer', format: 'int64' },
                    dateDebut: { type: 'date' },
                    dateFin: { type: 'date' },
                    idClient: { type: 'integer', format: 'int64' },
                    idBijou: { type: 'integer', format: 'int64' }
                }
            }
        }
    }
};