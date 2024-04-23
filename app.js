const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const categorieRoutes = require('./routes/categorie');
const bijouRoutes = require('./routes/bijou');
const clientRoutes = require('./routes/client');
const locationRoutes = require('./routes/location');
const { sequelize } = require('./models');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./config/swaggerConfig');
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(cors());
app.use('/categorie', categorieRoutes);
app.use('/bijou', bijouRoutes);
app.use('/client', clientRoutes);
app.use('/location', locationRoutes);
app.use(express.json());
app.use(express.static('public'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

sequelize.sync({ force: false }).then(() => {
    console.log('Les modèles ont été synchronisés avec la base de données.');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});