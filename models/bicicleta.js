
// Deynner Alexander Sanabria Rojas 20212578064
var Bicicleta =  function (id,color,modelo,ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString=function(){
    return 'id: ' + this.id + '| color: ' + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function (aBiciId) {
    var aBici = Bicicleta.allBicis.find(x => x.id === aBiciId);
  
    if(aBici){
      return aBici;
    }else{
      throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
    }
  }
  

Bicicleta.removeById = function (aBiciId) {
    for (let i = 0; i < Bicicleta.allBicis.length; i++) {
      if (Bicicleta.allBicis[i].id === aBiciId) {
        Bicicleta.allBicis.splice(i, 1);
        break;
      }
    }
  }

  Bicicleta.update = function(aBiciId){
    var index = Bicicleta.allBicis.findIndex(x => x.id == aBiciId.id);
    if(index > -1){
        Bicicleta.allBicis[index] = aBiciId;
        console.log(`Bicicleta updated: ${aBiciId.toString()}`);
    }else{
        throw new Error(`Bicicleta not found with id: ${aBiciId.id}`);
    }
}


  var a = new Bicicleta(1,'rojo','urbana',[4.581863240822626, -74.15747858968226]);
  var b = new Bicicleta(2,'blanca','urbana',[4.585937852335688, -74.1595277973976]);
  var c = new Bicicleta(3,'verde','Cross',[4.586103615292676, -74.16092791325053])

  Bicicleta.add(a);
  Bicicleta.add(b);
  Bicicleta.add(c);

module.exports = Bicicleta;