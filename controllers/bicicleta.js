// Deynner Alexander Sanabria Rojas 20212578064
const Bicicleta = require('../models/bicicleta');

/*
Este método HTTP se utiliza para obtener recursos, en este caso, todas las bicicletas disponibles. El controlador bicicleta_list renderiza una vista que muestra todas las bicicletas en el sistema.
 */
exports.bicicleta_list = function(req,res){
    res.render('bicicletas/index',{bicis: Bicicleta.allBicis});
}

/*Este método HTTP también se utiliza para obtener recursos, pero en este caso, se trata de una página que muestra un formulario para crear una nueva bicicleta. El controlador bicicleta_create_get renderiza la vista 'bicicletas/create'. */
exports.bicicleta_create_get = function(req,res){
    res.render('bicicletas/create');
}

/*Este método HTTP se utiliza para enviar datos al servidor para crear un nuevo recurso, en este caso, una nueva bicicleta. El controlador bicicleta_create_post crea una nueva instancia de bicicleta con los datos recibidos del formulario y la añade a la lista de bicicletas */
exports.bicicleta_create_post = function(req,res){
    let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat,req.body.lgn];
    Bicicleta.add(bici);
    
    res.redirect('/bicicletas');
}

/*Este método HTTP se utiliza para obtener recursos específicos para su edición, en este caso, una bicicleta con un ID específico. El controlador bicicleta_update_get obtiene la bicicleta por su ID y renderiza una vista que muestra los datos de la bicicleta para su edición */
exports.bicicleta_update_get = function(req,res){
    var bici = Bicicleta.findById(req.params.id);

    res.render('bicicletas/update',{bici});
}

/*Este método HTTP se utiliza para enviar datos al servidor para actualizar un recurso existente, en este caso, una bicicleta. El controlador bicicleta_update_post actualiza la bicicleta existente con los datos recibidos del formulario */
exports.bicicleta_update_post = function(req,res){
    var bici = Bicicleta.findById(req.params.id);
    bici.id=req.body.id;
    bici.color=req.body.color;
    bici.modelo=req.body.modelo;
    bici.ubicacion = [req.body.lat,req.body.lgn];

    res.redirect('/bicicletas');
}

// Este método HTTP se utiliza para enviar datos al servidor para eliminar un recurso, en este caso, una bicicleta. El controlador bicicleta_delete_post elimina la bicicleta por su ID
exports.bicicleta_delete_post = function(req,res){
    Bicicleta.removeById(req.body.id);

    res.redirect('/bicicletas');
}