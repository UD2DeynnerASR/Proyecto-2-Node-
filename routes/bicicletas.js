// Deynner Alexander Sanabria Rojas 20212578064
var express = require('express');
var router = express.Router();
var bicicletaController = require('../controllers/bicicleta');
//var bicicletaController = require('../controllers/api/bicicletaControllerApi');

// Metodo GET | URL : /bicicletas - Obtiene todas las bicicletas disponibles en la aplicación
router.get('/', bicicletaController.bicicleta_list);

// Metodo GET | URL : /bicicletas/create - Muestra un formulario para crear una nueva bicicleta
router.get('/create', bicicletaController.bicicleta_create_get);

// Metodo POST| URL :  /bicicletas/create - Crea una nueva bicicleta con los datos enviados desde el formulario
router.post('/create', bicicletaController.bicicleta_create_post);

// Metodo GET | URL : /bicicletas/:id/update - Obtiene una bicicleta específica para su edición
router.get('/:id/update', bicicletaController.bicicleta_update_get);

// Metodo POST| URL :  /bicicletas/:id/update - Actualiza una bicicleta existente con los datos enviados desde el formulario
router.post('/:id/update', bicicletaController.bicicleta_update_post);

// Metodo POST| URL :  /bicicletas/:id/delete - Elimina una bicicleta existente
router.post('/:id/delete', bicicletaController.bicicleta_delete_post);

module.exports = router;