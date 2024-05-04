// Deynner Alexander Sanabria Rojas 20212578064
var express = require('express');
var router = express.Router();
var bicicletaController = require('../../controllers/api/bicicletaControllerApi');

router.get('/',bicicletaController.bicicleta_list);
router.post('/create',bicicletaController.bicicleta_create);
router.delete('/create',bicicletaController.bicicleta_delete);



module.exports = router;