// Deynner Alexander Sanabria Rojas 20212578064
var express = require('express');
var router = express.Router();
//var bicicletaController = require('../controllers/bicicleta');
var bicicletaController = require('../controllers/api/bicicletaControllerApi');

// Metodo GET | URL : /bicicletas - Obtiene todas las bicicletas disponibles en la aplicación
router.get('/', bicicletaController.bicicleta_list);

// Metodo POST| URL :  /bicicletas/create - Crea una nueva bicicleta con los datos enviados desde el formulario
router.post('/create', bicicletaController.bicicleta_create);

// Metodo POST| URL :  /bicicletas/:id/delete - Elimina una bicicleta existente
router.delete('/delete', bicicletaController.bicicleta_delete);

module.exports = router;