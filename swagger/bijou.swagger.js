module.exports = {
    components: {
        schemas: {
            Bijous: {
                type: 'object',
                properties: {
                    id: { type: 'integer', format: 'int64' },
                    description: { type: 'string' },
                    prixVente: { type: 'number', format: 'double' },
                    prixLocation: { type: 'number', format: 'double' },
                    idCategorie: { type: 'integer', format: 'int64' }
                }
            }
        }
    }
};