const express = require('express');
const bodyParser = require('body-parser');
const corsConfig = require('./config/cors');
const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const socialMediaRoutes = require('./routes/socialMediaRoutes');
const blogRoutes = require('./routes/blogRoutes');
const companyRoutes = require('./routes/companyRoutes');
const showcaseRoutes = require('./routes/showcaseRoutes');
const formRoutes = require('./routes/formRoutes');
const pageRoutes = require('./routes/pageRoutes');
const sequelize = require('./config/database');
const SettingsService = require('./services/settingsService');
const path = require('path');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MFY API',
      version: '1.0.0',
      description: 'Authentication API with layered architecture'
    },
    servers: [
      { url: 'http://localhost:3000/api' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      { bearerAuth: [] }
    ]
  },
  apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

const app = express();
corsConfig(app);
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', menuRoutes);
app.use('/api', settingsRoutes);
app.use('/api', socialMediaRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/showcases', showcaseRoutes);
app.use('/api', formRoutes);
app.use('/api', pageRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/uploads/menus', express.static(__dirname + '/uploads/menus'));
app.use('/uploads/socialmedia', express.static(__dirname + '/uploads/socialmedia'));
app.use('/uploads/blog', express.static(path.join(__dirname, 'uploads/blog')));
app.use('/uploads/company', express.static(path.join(__dirname, 'uploads/company')));
app.use('/uploads/showcase', express.static(path.join(__dirname, 'uploads/showcase')));
app.use('/user', express.static(path.join(__dirname, 'uploads/user')));

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const Company = require('./models/company');
const Showcase = require('./models/showcase');
Company.hasMany(Showcase, { foreignKey: 'companyId', as: 'showcases' });
Showcase.belongsTo(Company, { foreignKey: 'companyId', as: 'company' });

const PORT = process.env.PORT || 3000;

SettingsService.createDefault().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
  });
});
