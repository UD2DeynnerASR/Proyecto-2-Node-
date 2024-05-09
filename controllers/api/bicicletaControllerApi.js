// Deynner Alexander Sanabria Rojas 20212578064
var Bicicleta = require('../../models/bicicleta')

exports.bicicleta_list = function(req,res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}


exports.bicicleta_create = function(req,res){
    var bici = new Bicicleta(req.body.id,req.body.color,req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lgn];

    Bicicleta.add(bici);
    
    res.status(200).json({
        bicicleta:bici
    });
}

exports.bicicleta_delete = function(req,res){
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
}

exports.bicicleta_update = function (req, res) {
    
    var bicicleta = Bicicleta.findById(req.body.id);
    
    bicicleta.id = req.body.id;
    bicicleta.color = req.body.color;
    bicicleta.modelo = req.body.modelo;
    bicicleta.ubicacion = [req.body.lat, req.body.lgn];
    
    Bicicleta.update(bicicleta);
 
    res.status(200).json({bicicleta: bicicleta});
}