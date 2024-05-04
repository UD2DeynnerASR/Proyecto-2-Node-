// Deynner Alexander Sanabria Rojas 20212578064
var express = require('express');
var router = express.Router();
var bicicletaController = require('../../controllers/api/bicicletaControllerApi');

// : Este método HTTP se utiliza para obtener todos los recursos de bicicletas disponibles en la API
router.get('/',bicicletaController.bicicleta_list);

/*Este método HTTP se utiliza para crear un nuevo recurso de bicicleta en la API */
router.post('/create',bicicletaController.bicicleta_create);

/*Este método HTTP se utiliza para eliminar un recurso de bicicleta en la API */
router.delete('/create',bicicletaController.bicicleta_delete);



module.exports = router;