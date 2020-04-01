const express = require('express');

const CategoriaController = require('./controllers/CategoriaController');
const ComponentesController = require('./controllers/ComponentesController');

const routes = express.Router();

routes.use(express.json());

routes.get('/categorias', CategoriaController.index);  
routes.post('/categorias', CategoriaController.create); 
routes.put('/categorias', CategoriaController.changes);
routes.delete('/categorias/:id', CategoriaController.delete);

routes.get('/componentes', ComponentesController.index);
routes.post('/componentes', ComponentesController.create);
routes.put('/componentes', ComponentesController.changes);
routes.delete('/componentes/:id', ComponentesController.delete);


module.exports = routes;